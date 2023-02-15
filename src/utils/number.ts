export function roundToTwoDecimals(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function formatAmountForDisplay({
  amount,
  currency = "USD",
  separateThousands = true,
}: {
  amount: number | undefined | null;
  currency?: string;
  separateThousands?: boolean;
}): string {
  if (amount === undefined || amount === null) {
    return "";
  }
  let stringAmount = roundToTwoDecimals(amount).toString(10);
  const indexOfDot = stringAmount.indexOf(".");
  let decimals: string = "";
  if (separateThousands) {
    if (indexOfDot > -1) {
      decimals = stringAmount.substring(indexOfDot);
      decimals = decimals.length === 2 ? `${decimals}0` : decimals;
    }
    stringAmount =
      stringAmount
        .substring(0, decimals.length ? indexOfDot : undefined)
        .split("")
        .reverse()
        .map((num, index, array) => {
          if (index % 3 === 0 && index !== 0) {
            return num + ",";
          }
          return num;
        })
        .reverse()
        .join("") + decimals;
  } else if (stringAmount.substring(indexOfDot).length === 2) {
    stringAmount = `${stringAmount}0`;
  }

  return `${stringAmount} ${currency}`;
}
