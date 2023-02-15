import React, { HTMLProps, useCallback, useMemo, useState } from "react";
import styles from "./Dashboard.module.css";
import classNames from "classnames";
import { Icons } from "src/types/data";
import { SidebarMenuItem } from "src/types/interfaces";
import { FlexDiv, Footer, Sidebar } from "src/components";
import { AppRoutes, SidebarMenu } from "src/types/enums";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useMount } from "src/hooks/useMount";

interface DashboardProps {
  children?: React.ReactNode;
  className?: string;
}

const Dashboard: React.FC<DashboardProps & HTMLProps<HTMLDivElement>> = ({ children, className, ...restProps }) => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const [activeSideBar, setActiveSideBar] = useState<SidebarMenu>(SidebarMenu.REPORTS);
  const location = useLocation();

  useMount(() => {
    switch (location.pathname as AppRoutes) {
      case AppRoutes.STATS:
        setActiveSideBar(SidebarMenu.STATS);
        break;
      case AppRoutes.GROUPS:
        setActiveSideBar(SidebarMenu.GROUPS);
        break;
      case AppRoutes.PAYMENTS:
        setActiveSideBar(SidebarMenu.PAYMENTS);
        break;
      default:
        setActiveSideBar(SidebarMenu.REPORTS);
    }
    if (location.pathname === AppRoutes.DASHBOARD) {
      navigate(AppRoutes.REPORTS, { replace: true });
    }
  });

  const onSidebarMenuClick = useCallback(
    (menu: SidebarMenu) => {
      setActiveSideBar(menu);
      switch (menu) {
        case SidebarMenu.GROUPS:
          navigate(AppRoutes.GROUPS);
          break;
        case SidebarMenu.PAYMENTS:
          navigate(AppRoutes.PAYMENTS);
          break;
        case SidebarMenu.STATS:
          navigate(AppRoutes.STATS);
          break;
        case SidebarMenu.REPORTS:
          navigate(AppRoutes.REPORTS);
          break;
      }
    },
    [navigate]
  );

  const onLogoutClick = useCallback(() => {
    console.log("logout");
  }, []);

  const sidebarItems = useMemo<ReadonlyArray<SidebarMenuItem>>(
    () => [
      {
        name: SidebarMenu.STATS,
        Icon: activeSideBar === SidebarMenu.STATS ? Icons.StatsActive : Icons.Stats,
        onClick: onSidebarMenuClick,
      },
      {
        name: SidebarMenu.GROUPS,
        Icon: activeSideBar === SidebarMenu.GROUPS ? Icons.GroupsActive : Icons.Groups,
        onClick: onSidebarMenuClick,
      },
      {
        name: SidebarMenu.PAYMENTS,
        Icon: activeSideBar === SidebarMenu.PAYMENTS ? Icons.PaymentsActive : Icons.Payments,
        onClick: onSidebarMenuClick,
      },
      {
        name: SidebarMenu.REPORTS,
        Icon: activeSideBar === SidebarMenu.REPORTS ? Icons.ReportsActive : Icons.Reports,
        onClick: onSidebarMenuClick,
      },
      {
        name: SidebarMenu.LOGOUT,
        Icon: Icons.Logout,
        onClick: onLogoutClick,
      },
    ],
    [activeSideBar, onLogoutClick, onSidebarMenuClick]
  );

  return (
    <FlexDiv className={classNames(styles.container, className)}>
      <FlexDiv className={styles.contentWrapper}>
        <Sidebar items={sidebarItems} />
        <FlexDiv className={styles.contentLayout}>
          {outlet ? outlet : <FlexDiv />}
          <Footer />
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};

export default React.memo(Dashboard);
