import React from "react";
import styles from "./UserAvatar.module.css";
import classNames from "classnames";
import AppText from "src/components/AppText";
import Colors from "src/styles/colors";
import FlexDiv from "src/components/FlexDiv";

interface UserAvatarProps {
  className?: string;
  firstName: string | undefined;
  lastName: string | undefined;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ className, firstName, lastName }) => {
  if (!firstName || !lastName) {
    return null;
  }
  return (
    <FlexDiv className={classNames(styles.container, className)}>
      <FlexDiv className={styles.avatar}>
        <AppText className={styles.initials} type={"TITLE"} color={Colors.WHITE}>
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </AppText>
      </FlexDiv>
      <AppText type={"LINKS"} className={styles.name} numberOfLines={2}>
        {`${firstName} ${lastName}`}
      </AppText>
    </FlexDiv>
  );
};

export default React.memo(UserAvatar);
