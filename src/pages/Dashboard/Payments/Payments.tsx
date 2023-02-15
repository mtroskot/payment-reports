import React from "react";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import { FlexDiv, EmptyContent } from "src/components";
import commonStyles from "src/styles/CommonStyles.module.css";

interface PaymentsProps {}

const Payments: React.FC<PaymentsProps> = (props) => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={commonStyles.centerVertically}>
      <EmptyContent title={t("no_payments")} description={t("no_payments_description")} />
    </FlexDiv>
  );
};

export default React.memo(Payments);
