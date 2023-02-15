import React from "react";
import styles from "./DropdownCalendar.module.css";
import BaseButton from "src/components/BaseButton/BaseButton";
import { DayPicker } from "react-day-picker";
import { Icons } from "src/types/data";
import Colors from "src/styles/colors";
import FlexDiv from "src/components/FlexDiv";

interface DropdownCalendarProps {
  className?: string;
  title: string;
  selectedDate: Date | undefined;
  onDateSelect: (date: Date) => void;
  isOpen: boolean;
  onClick: () => void;
}

const DropdownCalendar: React.FC<DropdownCalendarProps> = ({
  className,
  isOpen,
  title,
  selectedDate,
  onDateSelect,
  onClick,
}) => {
  return (
    <FlexDiv className={className}>
      <BaseButton title={title} Icon={Icons.Calendar} color={Colors.AQUAMARINE} onClick={onClick} />
      {isOpen && (
        <DayPicker
          className={styles.datePicker}
          mode="single"
          required={true}
          defaultMonth={selectedDate}
          selected={selectedDate}
          // @ts-ignore
          onSelect={onDateSelect}
        />
      )}
    </FlexDiv>
  );
};

export default React.memo(DropdownCalendar);
