import React, { useCallback } from "react";
import styles from "./Footer.module.css";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "src/types/enums";
import DividedText from "src/components/DividedText/DividedText";
import FlexDiv from "src/components/FlexDiv";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const { t } = useTypedTranslation();
  const navigate = useNavigate();

  const onPrivacyPolicyClick = useCallback(() => {
    navigate(AppRoutes.PRIVACY_POLICY);
  }, [navigate]);

  const onTermsAndConditionsClick = useCallback(() => {
    navigate(AppRoutes.TERMS_AND_CONDITIONS);
  }, [navigate]);

  return (
    <FlexDiv className={styles.container}>
      <DividedText
        leftText={t("terms_and_conditions")}
        rightText={t("privacy_policy")}
        onLeftTextPress={onPrivacyPolicyClick}
        onRightTextPress={onTermsAndConditionsClick}
      />
    </FlexDiv>
  );
};

export default React.memo(Footer);
