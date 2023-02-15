import { useTranslation } from "react-i18next";
import { TOptions } from "i18next";
import { useMemo } from "react";
import { TransKey } from "src/services/i18n";

export function useTypedTranslation() {
  const { t, i18n } = useTranslation();

  const typedTranslation = useMemo(
    () => ({
      t(key: TransKey, options?: TOptions): string {
        return t(key, options);
      },
      i18n,
    }),
    [i18n, t]
  );
  return typedTranslation;
}
