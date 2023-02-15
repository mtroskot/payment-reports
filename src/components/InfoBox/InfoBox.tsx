import React from "react";
import styles from "./InfoBox.module.css";
import FlexDiv from "src/components/FlexDiv";
import AppText from "src/components/AppText";
import Colors from "src/styles/colors";
import classNames from "classnames";

interface InfoBoxProps {
  title: string;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, className }) => {
  return (
    <FlexDiv className={classNames(styles.container, className)}>
      <AppText color={Colors.BLACK_BLUE} type={"LINKS"} className={styles.title}>
        {title}
      </AppText>
    </FlexDiv>
  );
};

export default React.memo(InfoBox);
