import { formatAmountForDisplay, roundToTwoDecimals } from "../../src/utils/number";

describe("utils/number.ts formatAmountForDisplay tests", () => {
  describe("when passing in an integer number", () => {
    it("should return correctly formatted number with separated thousands", () => {
      expect(formatAmountForDisplay({ amount: 0 })).toBe("0 USD");
      expect(formatAmountForDisplay({ amount: 1 })).toBe("1 USD");
      expect(formatAmountForDisplay({ amount: 9 })).toBe("9 USD");
      expect(formatAmountForDisplay({ amount: 10 })).toBe("10 USD");
      expect(formatAmountForDisplay({ amount: 99 })).toBe("99 USD");
      expect(formatAmountForDisplay({ amount: 100 })).toBe("100 USD");
      expect(formatAmountForDisplay({ amount: 991 })).toBe("991 USD");
      expect(formatAmountForDisplay({ amount: 1000 })).toBe("1,000 USD");
      expect(formatAmountForDisplay({ amount: 9911 })).toBe("9,911 USD");
      expect(formatAmountForDisplay({ amount: 10213 })).toBe("10,213 USD");
      expect(formatAmountForDisplay({ amount: 994132 })).toBe("994,132 USD");
      expect(formatAmountForDisplay({ amount: 1001233 })).toBe("1,001,233 USD");
    });
    it("should return correctly formatted number without separated thousands", () => {
      expect(formatAmountForDisplay({ separateThousands: false, amount: 991 })).toBe("991 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 1000 })).toBe("1000 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 9911 })).toBe("9911 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 10213 })).toBe("10213 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 994132 })).toBe("994132 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 1001233 })).toBe("1001233 USD");
    });
    it("should return correctly formatted number with currency", () => {
      expect(formatAmountForDisplay({ amount: 0, currency: "€" })).toBe("0 €");
      expect(formatAmountForDisplay({ amount: 1, currency: "£" })).toBe("1 £");
      expect(formatAmountForDisplay({ amount: 9, currency: "HRK" })).toBe("9 HRK");
      expect(formatAmountForDisplay({ amount: 10, currency: "$" })).toBe("10 $");
      expect(formatAmountForDisplay({ amount: 100, currency: "BRL" })).toBe("100 BRL");
      expect(formatAmountForDisplay({ amount: 1234, currency: "BRL" })).toBe("1,234 BRL");
      expect(formatAmountForDisplay({ amount: 1234123, currency: "EUR" })).toBe("1,234,123 EUR");
    });
  });
  describe("when passing in an float number", () => {
    it("should return correctly formatted number", () => {
      expect(formatAmountForDisplay({ amount: 0.0 })).toBe("0 USD");
      expect(formatAmountForDisplay({ amount: 0.1 })).toBe("0.10 USD");
      expect(formatAmountForDisplay({ amount: 0.12 })).toBe("0.12 USD");
      expect(formatAmountForDisplay({ amount: 0.123 })).toBe("0.12 USD");
      expect(formatAmountForDisplay({ amount: 0.1234 })).toBe("0.12 USD");
      expect(formatAmountForDisplay({ amount: 0.125 })).toBe("0.13 USD");
      expect(formatAmountForDisplay({ amount: 1.0 })).toBe("1 USD");
      expect(formatAmountForDisplay({ amount: 1.1 })).toBe("1.10 USD");
      expect(formatAmountForDisplay({ amount: 9.0 })).toBe("9 USD");
      expect(formatAmountForDisplay({ amount: 9.05 })).toBe("9.05 USD");
      expect(formatAmountForDisplay({ amount: 10.0 })).toBe("10 USD");
      expect(formatAmountForDisplay({ amount: 99.0 })).toBe("99 USD");
      expect(formatAmountForDisplay({ amount: 99.99 })).toBe("99.99 USD");
      expect(formatAmountForDisplay({ amount: 100.0 })).toBe("100 USD");
      expect(formatAmountForDisplay({ amount: 100.01 })).toBe("100.01 USD");
      expect(formatAmountForDisplay({ amount: 100.011 })).toBe("100.01 USD");
    });
    it("should return correctly formatted number with separated thousands", () => {
      expect(formatAmountForDisplay({ amount: 100.1 })).toBe("100.10 USD");
      expect(formatAmountForDisplay({ amount: 991.01 })).toBe("991.01 USD");
      expect(formatAmountForDisplay({ amount: 1000.13 })).toBe("1,000.13 USD");
      expect(formatAmountForDisplay({ amount: 9911.23 })).toBe("9,911.23 USD");
      expect(formatAmountForDisplay({ amount: 10213.11 })).toBe("10,213.11 USD");
      expect(formatAmountForDisplay({ amount: 994132.43 })).toBe("994,132.43 USD");
      expect(formatAmountForDisplay({ amount: 1001233.4 })).toBe("1,001,233.40 USD");
    });
    it("should return correctly formatted number without separated thousands", () => {
      expect(formatAmountForDisplay({ separateThousands: false, amount: 100.1 })).toBe("100.10 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 991.01 })).toBe("991.01 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 1000.13 })).toBe("1000.13 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 9911.23 })).toBe("9911.23 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 10213.11 })).toBe("10213.11 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 994132.43 })).toBe("994132.43 USD");
      expect(formatAmountForDisplay({ separateThousands: false, amount: 1001233.4 })).toBe("1001233.40 USD");
    });
  });
});

describe("utils/number.ts roundToTwoDecimals tests", () => {
  describe("when passing in an integer number", () => {
    it("should return same number", () => {
      expect(roundToTwoDecimals(0)).toBe(0);
      expect(roundToTwoDecimals(1320)).toBe(1320);
      expect(roundToTwoDecimals(120)).toBe(120);
      expect(roundToTwoDecimals(90)).toBe(90);
      expect(roundToTwoDecimals(9)).toBe(9);
    });
  });
});
