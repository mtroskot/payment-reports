import React from "react";
import styles from "./Home.module.css";
import { FlexDiv, NavBar } from "src/components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "src/types/enums";
import { useMount } from "src/hooks/useMount";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useMount(() => {
    if (location.pathname === "/") {
      navigate(AppRoutes.REPORTS);
    }
  });

  return (
    <FlexDiv className={styles.container}>
      <NavBar />
      <Outlet />
    </FlexDiv>
  );
};

export default React.memo(Home);
