import React, { useCallback, useMemo, useState } from "react";
import styles from "./Reports.module.css";
import {
  ContentTitle,
  FlexDiv,
  ReportsFilters,
  EmptyContent,
  ReportOverview,
  InfoBox,
  Loader,
  PieChart,
} from "src/components";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import {
  DropdownPickerItem,
  Gateway,
  PieChartData,
  Project,
  Report,
  ReportItem,
  ReportOverviewTableHeaderKey,
} from "src/types/interfaces";
import { QueryKey, ReportsFilter } from "src/types/enums";
import { useQuery } from "@tanstack/react-query";
import { getGateways, getProjects, getReport } from "src/services/network/api";
import Colors from "src/styles/colors";
import { formatAmountForDisplay } from "src/utils/number";
import classNames from "classnames";

const Reports = () => {
  const { t } = useTypedTranslation();
  const [activeReportsFilter, setActiveReportsFilter] = useState<ReportsFilter | undefined>();
  const [selectedProject, setSelectedProject] = useState<Project | "all">("all");
  const [selectedGateway, setSelectedGateway] = useState<Gateway | "all">("all");
  const [selectedFromDate, setSelectedFromDate] = useState<Date | undefined>();
  const [selectedToDate, setSelectedToDate] = useState<Date | undefined>();

  const { data: projects = [] } = useQuery<Project[]>([QueryKey.GET_PROJECTS], async () => {
    const response = await getProjects();
    return response.data;
  });

  const { data: gateways = [] } = useQuery<Gateway[]>([QueryKey.GET_GATEWAYS], async () => {
    const response = await getGateways();
    return response.data;
  });

  const {
    data: reports = [],
    isFetching: isLoadingReport = false,
    refetch: refetchReports,
  } = useQuery<Report[]>(
    [QueryKey.GET_REPORTS],
    async () => {
      if (!selectedFromDate || !selectedToDate) {
        return [];
      }

      const response = await getReport({ from: selectedFromDate, to: selectedToDate });
      return response.data;
    },
    { enabled: false }
  );

  const onProjectSelect = useCallback((project: Project | "all") => {
    setActiveReportsFilter(undefined);
    setSelectedProject(project);
  }, []);

  const onGatewaySelect = useCallback((gateway: Gateway | "all") => {
    setActiveReportsFilter(undefined);
    setSelectedGateway(gateway);
  }, []);

  const onFromDateSelect = useCallback(
    (date: Date) => {
      setActiveReportsFilter(undefined);
      setSelectedFromDate(() => {
        if (selectedToDate && date.getTime() > selectedToDate.getTime()) {
          return selectedToDate;
        }
        return date;
      });
    },
    [selectedToDate]
  );

  const onToDateSelect = useCallback(
    (date: Date) => {
      setActiveReportsFilter(undefined);
      setSelectedToDate(() => {
        if (selectedFromDate && selectedFromDate?.getTime() > date.getTime()) {
          return selectedFromDate;
        }
        return date;
      });
    },
    [selectedFromDate]
  );

  const onReportsFilterClick = useCallback((filter: ReportsFilter) => {
    setActiveReportsFilter((prevState) => (prevState === filter ? undefined : filter));
  }, []);

  const onGenerateReportClick = useCallback(() => {
    if (!selectedGateway) {
      setSelectedGateway("all");
    }
    if (!selectedProject) {
      setSelectedProject("all");
    }
    setActiveReportsFilter(undefined);
    refetchReports();
  }, [refetchReports, selectedGateway, selectedProject]);

  const projectPickerItems = useMemo<DropdownPickerItem[]>(
    () => [
      {
        title: t("all_projects"),
        onClick: () => onProjectSelect("all"),
        id: "all",
        isSelected: selectedProject === "all",
      },
      ...projects.map((project) => ({
        title: project.name,
        onClick: () => onProjectSelect(project),
        id: project.projectId,
        isSelected: (selectedProject as Project)?.projectId === project.projectId,
      })),
    ],
    [onProjectSelect, projects, selectedProject, t]
  );

  const gatewayPickerItems = useMemo<DropdownPickerItem[]>(
    () => [
      {
        title: t("all_gateways"),
        onClick: () => onGatewaySelect("all"),
        id: "all",
        isSelected: selectedGateway === "all",
      },
      ...gateways.map((gateway) => ({
        title: gateway.name,
        onClick: () => onGatewaySelect(gateway),
        id: gateway.gatewayId,
        isSelected: (selectedGateway as Gateway)?.gatewayId === gateway.gatewayId,
      })),
    ],
    [gateways, onGatewaySelect, selectedGateway, t]
  );

  const filteredReports = useMemo(() => {
    if (selectedProject === "all" && selectedGateway === "all") {
      return reports;
    }
    return reports.filter((r) => {
      const gatewayCondition = selectedGateway === "all" ? true : selectedGateway.gatewayId === r.gatewayId;
      const projectCondition = selectedProject === "all" ? true : selectedProject.projectId === r.projectId;
      return gatewayCondition && projectCondition;
    });
  }, [reports, selectedGateway, selectedProject]);

  const projectReports = useMemo<ReportItem[]>(() => {
    const projectsWithReports = projects.map((p) => {
      const reportsByProjectId: Report[] = filteredReports.filter((r) => r.projectId === p.projectId);
      return {
        name: p.name,
        id: p.projectId,
        reports: reportsByProjectId,
        total: reportsByProjectId.reduce((acc, currVal) => {
          acc += currVal.amount;
          return acc;
        }, 0),
      };
    });
    if (selectedProject === "all") {
      return projectsWithReports;
    }
    return projectsWithReports.filter((p) => p.id === selectedProject.projectId);
  }, [filteredReports, projects, selectedProject]);

  const gatewayReports = useMemo<ReportItem[]>(() => {
    const gatewaysWithReports = gateways.map((g) => {
      const reportsByGatewayId: Report[] = filteredReports.filter((r) => r.gatewayId === g.gatewayId);
      return {
        name: g.name,
        id: g.gatewayId,
        reports: reportsByGatewayId,
        total: reportsByGatewayId.reduce((acc, currVal) => {
          acc += currVal.amount;
          return acc;
        }, 0),
      };
    });
    if (selectedGateway === "all") {
      return gatewaysWithReports;
    }
    return gatewaysWithReports.filter((g) => g.id === selectedGateway.gatewayId);
  }, [filteredReports, gateways, selectedGateway]);

  const reportData = useMemo<ReadonlyArray<ReportItem>>(() => {
    const showGateWayReports: boolean = selectedProject !== "all" && selectedGateway === "all";
    if (showGateWayReports) {
      return gatewayReports;
    }
    return projectReports;
  }, [gatewayReports, projectReports, selectedGateway, selectedProject]);

  const hasReports = !!selectedGateway && !!selectedProject && reports.length > 0;

  const pieChartData = useMemo<{ total: string; data: PieChartData[] } | null>(() => {
    if (
      (selectedProject === "all" && selectedGateway === "all") ||
      (selectedGateway !== "all" && selectedProject !== "all")
    ) {
      return null;
    }
    return {
      total: `${t(
        selectedProject !== "all" && selectedGateway === "all" ? "gateway_total" : "project_total"
      )} | ${formatAmountForDisplay({
        amount: reportData.reduce((acc, currVal) => {
          return acc + currVal.total;
        }, 0),
      })}`,
      data: reportData.map((gr) => [gr.name, gr.reports.length]),
    };
  }, [reportData, selectedGateway, selectedProject, t]);

  const reportDataTotal = useMemo(
    () =>
      reportData.reduce((acc, currVal) => {
        acc += currVal.total;
        return acc;
      }, 0),
    [reportData]
  );

  const excludedTableData = useMemo<ReportOverviewTableHeaderKey[] | undefined>(() => {
    if (selectedGateway !== "all") {
      return ["gateway"];
    }
    return undefined;
  }, [selectedGateway]);

  return (
    <FlexDiv className={styles.container}>
      <FlexDiv className={styles.header}>
        <ContentTitle title={t("reports")} subtitle={t("easily_generate_report_of_transactions")} />
        <ReportsFilters
          activeDropdown={activeReportsFilter}
          onProjectPickerClick={() => onReportsFilterClick(ReportsFilter.PROJECT)}
          onGatewayPickerClick={() => onReportsFilterClick(ReportsFilter.GATEWAY)}
          onFromDatePickerClick={() => onReportsFilterClick(ReportsFilter.FROM_DATE)}
          onToDatePickerClick={() => onReportsFilterClick(ReportsFilter.TO_DATE)}
          projectPickerItems={projectPickerItems}
          gatewayPickerPickerItems={gatewayPickerItems}
          onFromDateSelect={onFromDateSelect}
          onToDateSelect={onToDateSelect}
          selectedFromDate={selectedFromDate}
          selectedToDate={selectedToDate}
          onGenerateReportClick={onGenerateReportClick}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
          generateReportDisabled={false}
          // generateReportDisabled={!selectedFromDate || !selectedToDate}
        />
      </FlexDiv>
      {!hasReports ? (
        isLoadingReport ? (
          <FlexDiv className={styles.content}>
            <Loader color={Colors.SEA_BLUE} />
          </FlexDiv>
        ) : (
          <EmptyContent title={t("no_reports")} description={t("no_reports_description")} />
        )
      ) : (
        <FlexDiv className={styles.overviewContainer}>
          <FlexDiv
            className={classNames(styles.tableContainer, pieChartData ? styles.tableContainerWithPieChart : undefined)}
          >
            <ReportOverview
              displayMode={selectedProject !== "all" && selectedGateway !== "all" ? "table" : "dropdown-table"}
              reports={reportData}
              selectedProjectOption={selectedProject === "all" ? t("all_projects") : selectedProject.name}
              selectedGatewayOption={selectedGateway === "all" ? t("all_gateways") : selectedGateway.name}
              excludedTableData={excludedTableData}
            />
            {!pieChartData && (
              <InfoBox
                className={styles.totalBox}
                title={`${t("total")}: ${formatAmountForDisplay({
                  amount: reportDataTotal,
                })}`}
              />
            )}
          </FlexDiv>
          {pieChartData && (
            <FlexDiv className={styles.pieChartContainer}>
              <PieChart totalText={pieChartData.total} pieChartData={pieChartData.data} />
            </FlexDiv>
          )}
        </FlexDiv>
      )}
    </FlexDiv>
  );
};

export default React.memo(Reports);
