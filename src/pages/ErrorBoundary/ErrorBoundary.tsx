import React from "react";
import styles from "./ErrorBoundary.module.css";
import Lottie from "react-lottie";
import * as notFoundAnimation from "src/assets/lottie/404.json";
import * as errorAnimation from "src/assets/lottie/error.json";
import { AppText, FlexDiv, NavBar } from "src/components";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import Colors from "src/styles/colors";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const { t } = useTypedTranslation();
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: notFoundAnimation,
    };
    return (
      <FlexDiv className={styles.container}>
        <NavBar />
        <FlexDiv className={styles.content}>
          <AppText color={Colors.DARK_BLUE} className={styles.title} type={"TITLE"}>
            {t("page_not_found")}
          </AppText>
          <Lottie options={lottieOptions} height={400} width={400} />
        </FlexDiv>
      </FlexDiv>
    );
  }

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
  };
  return (
    <FlexDiv className={styles.container}>
      <FlexDiv className={styles.content}>
        <Lottie options={lottieOptions} height={400} width={"100%"} speed={0.8} />
      </FlexDiv>
    </FlexDiv>
  );
};

export default React.memo(ErrorBoundary);
