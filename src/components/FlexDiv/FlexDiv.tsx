import React, { forwardRef, HTMLProps } from "react";
import styles from "./FlexDiv.module.css";
import classNames from "classnames";

interface FlexDivProps {
  children?: React.ReactNode;
  className?: string;
}

const FlexDiv = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement> & FlexDivProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.container, className)} {...restProps}>
        {children}
      </div>
    );
  }
);

export default React.memo(FlexDiv);
