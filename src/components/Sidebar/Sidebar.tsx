import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarMenuItem } from "src/types/interfaces";
import FlexDiv from "src/components/FlexDiv";

interface SidebarProps {
  items: ReadonlyArray<SidebarMenuItem>;
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <FlexDiv className={styles.container}>
      {items.map((item) => {
        const { Icon, onClick, name } = item;
        return <Icon key={name} className={styles.icon} onClick={() => onClick(name)} />;
      })}
    </FlexDiv>
  );
};

export default React.memo(Sidebar);
