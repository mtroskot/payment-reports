import React from "react";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";
import { FlexDiv, EmptyContent } from "src/components";
import commonStyles from "src/styles/CommonStyles.module.css";

interface ReportsProps {}

const Stats: React.FC<ReportsProps> = (props) => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={commonStyles.centerVertically}>
      <EmptyContent title={t("no_stats")} description={t("no_stats_description")} />
    </FlexDiv>
  );
};

export default React.memo(Stats);
