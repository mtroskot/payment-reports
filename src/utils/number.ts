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
  const [integer, decimal] = amount.toString().split(".");
  return `${amount.toLocaleString("en-US", {
    useGrouping: separateThousands,
    minimumFractionDigits: decimal && decimal.length === 1 ? 2 : 0,
    maximumFractionDigits: 2,
  })} ${currency}`;
}
