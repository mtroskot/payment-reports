import React from "react";
import commonStyles from "src/styles/CommonStyles.module.css";
import { FlexDiv, EmptyContent } from "src/components";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";

interface GroupsProps {}

const Groups: React.FC<GroupsProps> = (props) => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={commonStyles.centerVertically}>
      <EmptyContent title={t("no_groups")} description={t("no_groups_description")} />
    </FlexDiv>
  );
};

export default React.memo(Groups);
