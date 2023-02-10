import React, { HTMLProps } from "react";
import styles from "./Dashboard.module.css";
import classNames from "classnames";

interface DashboardProps {
  children?: React.ReactNode;
  className?: string;
}

const Dashboard: React.FC<DashboardProps & HTMLProps<HTMLDivElement>> = ({ children, className, ...restProps }) => {
  return (
    <div className={classNames(styles.container, className)} {...restProps}>
      Hello World
    </div>
  );
};

export default React.memo(Dashboard);
