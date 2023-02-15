import React from "react";
import styles from "./Dropdown.module.css";
import FlexDiv from "src/components/FlexDiv";
import AppText from "src/components/AppText";
import Colors from "src/styles/colors";

interface DropdownProps {
  leftText: string;
  rightText: string;
  isTableOpen: boolean;
  onDropdownClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  leftText,
  rightText,
  className,
  children,
  isTableOpen,
  onDropdownClick,
}) => {
  return (
    <FlexDiv className={className}>
      <FlexDiv className={styles.dropdown} onClick={onDropdownClick}>
        <AppText className={styles.leftText} color={Colors.DARK_BLUE} type={"LINKS"} numberOfLines={1}>
          {leftText}
        </AppText>
        <AppText className={styles.rightText} color={Colors.DARK_BLUE} type={"LINKS"} numberOfLines={1}>
          {rightText}
        </AppText>
      </FlexDiv>
      {isTableOpen ? children : null}
    </FlexDiv>
  );
};

export default React.memo(Dropdown);
