import React from "react";
import styles from "./NavBar.module.css";
import FlexDiv from "src/components/FlexDiv";
import { NavBarButtons, UserAvatar } from "src/components/index";
import { useAuthentication } from "src/contexts/AuthenticationContext";

const NavBar = () => {
  const { user } = useAuthentication();

  return (
    <FlexDiv className={styles.container}>
      <NavBarButtons />
      <UserAvatar firstName={user?.firstName} lastName={user?.lastName} />
    </FlexDiv>
  );
};

export default React.memo(NavBar);
