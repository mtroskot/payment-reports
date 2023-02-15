import React, { useCallback } from "react";
import styles from "./NavBarButtons.module.css";
import { Icons } from "src/types/data";
import FlexDiv from "src/components/FlexDiv";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/types/enums";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";

interface NavBarButtonsProps {}

const NavBarButtons: React.FC<NavBarButtonsProps> = (props) => {
  const { t } = useTypedTranslation();
  const navigate = useNavigate();

  const onHomePress = useCallback(() => {
    navigate(AppRoutes.DASHBOARD, { replace: true });
  }, [navigate]);

  return (
    <FlexDiv className={styles.iconsContainer}>
      <Icons.ReportsLogo className={styles.reportsLogo} onClick={onHomePress} title={t("alt_dashboard_logo")} />
      <Icons.Menu className={styles.menuIcon} title={t("alt_dashboard_menu_icon")} />
    </FlexDiv>
  );
};

export default React.memo(NavBarButtons);
