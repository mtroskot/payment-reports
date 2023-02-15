import React, { CSSProperties, HTMLProps, useMemo } from "react";
import styles from "./AppText.module.css";
import { TypographyType } from "src/types/interfaces";
import classNames from "classnames";

interface AppTextProps {
  type: TypographyType;
  children: React.ReactNode | React.ReactNode[];
  color?: string;
  numberOfLines?: number;
  className?: string;
}

const AppText: React.FC<AppTextProps & HTMLProps<HTMLParagraphElement>> = ({
  className,
  color,
  numberOfLines,
  type,
  children,
  ...restProps
}) => {
  const style = useMemo<CSSProperties>(
    () => ({
      color: color,
      lineClamp: numberOfLines,
      WebkitLineClamp: numberOfLines,
    }),
    [color, numberOfLines]
  );

  return (
    <p
      className={classNames(styles[type], className, numberOfLines ? styles.lines : undefined)}
      style={style}
      {...restProps}
    >
      {children}
    </p>
  );
};

export default React.memo(AppText);
