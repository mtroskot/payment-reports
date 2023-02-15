import React from "react";
import styles from "./BaseButton.module.css";
import AppText from "src/components/AppText";
import classNames from "classnames";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import { SVGIcon } from "src/types/interfaces";

interface BaseButtonProps {
  title: string;
  Icon?: SVGIcon;
  color: string;
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({ color, disabled, title, onClick, Icon, className, iconClassName }) => {
  const { t } = useTypedTranslation();
  return (
    <button
      className={classNames(styles.container, className)}
      style={{ backgroundColor: color, cursor: disabled ? "default" : "pointer" }}
      type={"button"}
      onClick={!disabled ? onClick : undefined}
    >
      <AppText numberOfLines={1} className={styles.text} type={"SMALL_TEXT"}>
        {title}
      </AppText>
      {!!Icon && <Icon className={classNames(styles.icon, iconClassName)} title={t("alt_button_icon")} />}
    </button>
  );
};

export default React.memo(BaseButton);
