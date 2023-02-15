import React, { useEffect, useState } from "react";
import styles from "./DropdownPicker.module.css";
import BaseButton from "src/components/BaseButton";
import { Icons } from "src/types/data";
import Colors from "src/styles/colors";
import AppText from "src/components/AppText";
import { DropdownPickerItem } from "src/types/interfaces";
import FlexDiv from "src/components/FlexDiv";
import classNames from "classnames";

interface DropdownPickerProps {
  className?: string;
  initialTitle?: string;
  title: string;
  onDropdownClick: () => void;
  isOpen: boolean;
  items: DropdownPickerItem[];
}

const DropdownPicker: React.FC<DropdownPickerProps> = ({
  title,
  initialTitle,
  isOpen,
  onDropdownClick,
  className,
  items,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setIsTouched(true);
  }, [title]);
  return (
    <FlexDiv className={className}>
      <BaseButton
        title={initialTitle && !isTouched ? initialTitle : title}
        Icon={Icons.ArrowDown}
        color={Colors.AQUAMARINE}
        iconClassName={isOpen ? styles.activeIcon : styles.inactiveIcon}
        onClick={onDropdownClick}
      />
      {isOpen && (
        <FlexDiv className={styles.dropdown}>
          {items.map((item) => (
            <FlexDiv
              key={item.id}
              className={classNames(styles.dropdownItem, item.isSelected ? styles.selectedDropdown : undefined)}
              onClick={() => {
                item.onClick();
                setIsTouched(true);
              }}
            >
              <AppText numberOfLines={1} type={"SMALL_TEXT"}>
                {item.title}
              </AppText>
            </FlexDiv>
          ))}
        </FlexDiv>
      )}
    </FlexDiv>
  );
};

export default React.memo(DropdownPicker);
