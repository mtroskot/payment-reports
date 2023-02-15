import React from "react";
import styles from "./EmptyContent.module.css";
import { Icons } from "src/types/data";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import AppText from "src/components/AppText";
import FlexDiv from "src/components/FlexDiv";

interface EmptyContentProps {
  title: string;
  description: string;
}

const EmptyContent: React.FC<EmptyContentProps> = ({ title, description }) => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={styles.container}>
      <AppText type={"TITLE"}>{title}</AppText>
      <AppText type={"SUBTITLE"} className={styles.description}>
        {description}
      </AppText>
      <Icons.EmptyReports className={styles.icon} title={t("alt_no_reports_icon")} />
    </FlexDiv>
  );
};

export default React.memo(EmptyContent);
