import * as React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "src/pages/Legal/PrivacyPolicy";

describe("renders PrivacyPolicy correctly", () => {
  it("should render title and description", async () => {
    const { container } = render(<PrivacyPolicy />);
    expect(screen.getByText("privacy_policy")).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.startsWith('Lorem'))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
