import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { AppText, FlexDiv } from "src/components";
import { useTypedTranslation } from "src/hooks/useTypedTranslation";

const PrivacyPolicy = () => {
  const { t } = useTypedTranslation();
  return (
    <FlexDiv className={styles.container}>
      <AppText type={"TITLE"}>{t("privacy_policy")}</AppText>
      <AppText type={"SUBTITLE"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat fringilla tortor, nec sollicitudin
        lectus. Aenean ac ex in felis consequat varius. Aenean ullamcorper nibh metus, vitae facilisis orci ultrices
        quis. Fusce pretium venenatis venenatis. Vivamus id risus pharetra massa vulputate congue. Cras sed sapien nec
        tellus faucibus molestie sed ut elit. Maecenas imperdiet tortor ex. Fusce laoreet nulla ut augue varius
        ultrices. Suspendisse lacinia enim in tempus mattis. Nullam mi est, lacinia sit amet mollis eget, tempus sit
        amet velit. Duis quis erat sapien. Nulla faucibus vitae nisl eu tristique. Nam molestie diam interdum luctus
        commodo. Aliquam dignissim, odio at bibendum molestie, libero nunc malesuada magna, eget convallis mauris augue
        vel orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
        accumsan, odio id scelerisque eleifend, elit augue placerat dolor, et lacinia ipsum velit vel velit. Nulla
        pellentesque id orci quis facilisis. Sed blandit ligula in sapien consectetur vehicula. Fusce hendrerit luctus
        ligula in lobortis. Etiam fermentum dolor a ligula dictum, ac aliquet nisl tincidunt. Ut in pellentesque urna.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultricies ex
        posuere turpis pulvinar, et fringilla quam finibus. Suspendisse at ultricies nulla. Nulla facilisis lacinia odio
        non porttitor. Vivamus tellus arcu, blandit sed neque eu, pharetra consequat purus. Maecenas in dui ac ligula
        egestas molestie quis id metus. Proin varius ultricies diam et congue. Cras facilisis erat eget lectus convallis
        ullamcorper. Cras vehicula gravida nunc at venenatis. Donec nunc massa, tristique ut libero in, dictum accumsan
        est. Aliquam porttitor diam id ligula facilisis luctus. Sed ac quam feugiat, bibendum elit a, auctor augue.
        Donec dui quam, mollis tristique tincidunt ut, ultrices in diam. Duis suscipit lectus magna, quis volutpat
        libero volutpat vitae. Vivamus id viverra quam, a ultricies nisi. Quisque risus massa, tincidunt eget efficitur
        vel, pellentesque finibus ligula. In hac habitasse platea dictumst. Fusce interdum dictum egestas. Phasellus
        congue quam mauris, quis faucibus velit vulputate eget. Nam arcu tortor, lacinia ac quam id, feugiat auctor
        ligula. Proin odio mi, tincidunt eget maximus nec, lacinia sit amet leo. Pellentesque faucibus diam non lorem
        porttitor, nec posuere est faucibus. Sed interdum quam quam. Vestibulum nisl est, vestibulum finibus felis sed,
        rhoncus varius quam. Fusce eget congue ante. Phasellus euismod nisi ut convallis cursus. Nulla laoreet ipsum
        suscipit malesuada rhoncus. Vestibulum justo erat, condimentum id tincidunt sed, porta sed purus. Donec sed dui
        magna. Nam ac bibendum elit. Morbi nec elementum mauris, non vehicula justo. Integer volutpat augue sed
        venenatis dictum. Integer nec nunc et ligula sagittis ultricies ut congue lectus.
      </AppText>
    </FlexDiv>
  );
};

export default React.memo(PrivacyPolicy);
