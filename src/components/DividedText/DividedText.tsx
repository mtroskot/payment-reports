import React from "react";
import styles from "./DividedText.module.css";
import commonStyles from "src/styles/CommonStyles.module.css";
import AppText from "src/components/AppText";
import FlexDiv from "src/components/FlexDiv";
import classNames from "classnames";

interface DividedTextProps {
  leftText: string;
  rightText: string;
  onLeftTextPress?: () => void;
  onRightTextPress?: () => void;
  className?: string;
}

const DividedText: React.FC<DividedTextProps> = ({
  onLeftTextPress,
  className,
  onRightTextPress,
  leftText,
  rightText,
}) => {
  return (
    <FlexDiv className={classNames(styles.container, className)}>
      <AppText
        className={onLeftTextPress ? commonStyles.clickable : undefined}
        type={"LINKS"}
        onClick={onLeftTextPress}
      >
        {leftText}
      </AppText>
      <AppText className={styles.separator} type={"LINKS"}>
        {"|"}
      </AppText>
      <AppText
        className={onRightTextPress ? commonStyles.clickable : undefined}
        type={"LINKS"}
        onClick={onRightTextPress}
      >
        {rightText}
      </AppText>
    </FlexDiv>
  );
};

export default React.memo(DividedText);
