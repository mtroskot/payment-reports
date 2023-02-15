import React, { useCallback, useMemo, useState } from "react";
import styles from "./ReportOverview.module.css";
import FlexDiv from "src/components/FlexDiv";
import DividedText from "src/components/DividedText";
import { Report, ReportItem, ReportOverviewTableHeaderKey } from "src/types/interfaces";
import Table from "src/components/Table";
import Dropdown from "src/components/Dropdown";
import { formatAmountForDisplay } from "src/utils/number";
import { formatDate } from "src/utils/date";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";


interface ReportOverviewProps {
  displayMode: "dropdown-table" | "table";
  reports: ReadonlyArray<ReportItem>;
  excludedTableData: ReportOverviewTableHeaderKey[] | undefined;
  selectedProjectOption: string;
  selectedGatewayOption: string;
}

const ReportOverview: React.FC<ReportOverviewProps> = ({
  displayMode,
  reports,
  selectedGatewayOption,
  selectedProjectOption,
  excludedTableData,
}) => {
  const { t } = useTypedTranslation();
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const renderTable = useCallback(
    (tableData: Report[]) => {
      const tableHeader: { key: ReportOverviewTableHeaderKey; value: string }[] = [
        { key: "date", value: t("date") },
        { key: "gateway", value: t("gateway") },
        { key: "transactionId", value: t("transaction_id") },
        { key: "amount", value: t("amount") },
      ];
      return tableData.length ? (
        <Table
          excludedData={excludedTableData}
          className={styles.table}
          tableHeader={tableHeader}
          tableData={tableData.map((report) => ({
            date: formatDate(new Date(report.created as string)),
            transactionId: report.paymentId,
            amount: formatAmountForDisplay({ amount: report.amount }),
            gateway: report.gatewayId,
          }))}
        />
      ) : null;
    },
    [excludedTableData, t]
  );

  const Report = useMemo(() => {
    if (displayMode === "dropdown-table") {
      return reports.map((project, index) => {
        const { name, total, id, reports } = project;
        const isTableOpen = openDropdowns.includes(id);
        return (
          <Dropdown
            key={id}
            className={index !== 0 ? styles.divider : undefined}
            leftText={name}
            rightText={`${t("total")}: ${formatAmountForDisplay({ amount: total })}`}
            isTableOpen={isTableOpen}
            onDropdownClick={() => {
              if (isTableOpen) {
                setOpenDropdowns(openDropdowns.filter((open) => open !== id));
              } else {
                setOpenDropdowns((prevState) => [...prevState, id]);
              }
            }}
          >
            {renderTable(reports)}
          </Dropdown>
        );
      });
    }

    return reports.map(({ reports }) => {
      return renderTable(reports);
    });
  }, [displayMode, openDropdowns, renderTable, reports, t]);

  return (
    <FlexDiv className={styles.container}>
      <DividedText leftText={selectedProjectOption} rightText={selectedGatewayOption} />
      {Report}
    </FlexDiv>
  );
};

export default React.memo(ReportOverview);
