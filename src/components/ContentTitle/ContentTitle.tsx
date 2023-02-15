import React from "react";
import styles from "./ContentTitle.module.css";
import AppText from "src/components/AppText";
import FlexDiv from "src/components/FlexDiv";

interface ContentTitleProps {
  title: string;
  subtitle: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subtitle }) => {
  return (
    <FlexDiv className={styles.container}>
      <AppText type={"TITLE"}>{title}</AppText>
      <AppText type={"SUBTITLE"} className={styles.subtitle} numberOfLines={2}>
        {subtitle}
      </AppText>
    </FlexDiv>
  );
};

export default React.memo(ContentTitle);
