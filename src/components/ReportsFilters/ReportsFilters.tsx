import React from "react";
import styles from "./ReportsFilters.module.css";
import BaseButton from "src/components/BaseButton";
import "react-day-picker/dist/style.css";
import DropdownCalendar from "src/components/DropdownCalendar";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import Colors from "src/styles/colors";
import DropdownPicker from "src/components/DropdownPicker";
import { ReportsFilter } from "src/types/enums";
import { DropdownPickerItem, Gateway, Project } from "src/types/interfaces";
import FlexDiv from "src/components/FlexDiv";
import { formatDate } from "src/utils/date";

interface ReportsFiltersProps {
  activeDropdown: ReportsFilter | undefined;
  onProjectPickerClick: () => void;
  selectedProject: Project | "all";
  selectedGateway: Gateway | "all";
  projectPickerItems: DropdownPickerItem[];
  gatewayPickerPickerItems: DropdownPickerItem[];
  onGatewayPickerClick: () => void;
  onFromDatePickerClick: () => void;
  onToDatePickerClick: () => void;
  onFromDateSelect: (date: Date) => void;
  onToDateSelect: (date: Date) => void;
  selectedFromDate: undefined | Date;
  selectedToDate: undefined | Date;
  onGenerateReportClick: () => void;
  generateReportDisabled: boolean;
}

const ReportsFilters: React.FC<ReportsFiltersProps> = ({
  onProjectPickerClick,
  onGatewayPickerClick,
  onFromDateSelect,
  onToDateSelect,
  selectedFromDate,
  selectedToDate,
  onGenerateReportClick,
  activeDropdown,
  onFromDatePickerClick,
  onToDatePickerClick,
  gatewayPickerPickerItems,
  projectPickerItems,
  selectedProject,
  selectedGateway,
  generateReportDisabled,
}) => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={styles.container}>
      <DropdownPicker
        className={styles.spacer}
        initialTitle={t("select_project")}
        title={selectedProject === "all" ? t("all_projects") : selectedProject.name}
        onDropdownClick={onProjectPickerClick}
        isOpen={activeDropdown === ReportsFilter.PROJECT}
        items={projectPickerItems}
      />
      <DropdownPicker
        className={styles.spacer}
        initialTitle={t("select_gateway")}
        title={selectedGateway === "all" ? t("all_gateways") : selectedGateway.name}
        onDropdownClick={onGatewayPickerClick}
        isOpen={activeDropdown === ReportsFilter.GATEWAY}
        items={gatewayPickerPickerItems}
      />
      <DropdownCalendar
        className={styles.spacer}
        title={selectedFromDate ? formatDate(selectedFromDate) : t("from_date")}
        selectedDate={selectedFromDate}
        onDateSelect={onFromDateSelect}
        isOpen={activeDropdown === ReportsFilter.FROM_DATE}
        onClick={onFromDatePickerClick}
      />
      <DropdownCalendar
        className={styles.spacer}
        title={selectedToDate ? formatDate(selectedToDate) : t("to_date")}
        selectedDate={selectedToDate}
        onDateSelect={onToDateSelect}
        isOpen={activeDropdown === ReportsFilter.TO_DATE}
        onClick={onToDatePickerClick}
      />
      <BaseButton
        title={t("generate_report")}
        disabled={generateReportDisabled}
        color={generateReportDisabled ? Colors.GRAY_BLUE : Colors.DARK_BLUE}
        onClick={onGenerateReportClick}
      />
    </FlexDiv>
  );
};

export default React.memo(ReportsFilters);
