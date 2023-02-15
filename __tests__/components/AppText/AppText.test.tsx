import * as React from "react";
import { render, screen } from "@testing-library/react";
import AppText from "src/components/AppText";

describe("renders AppText correctly", () => {
  it("should render default text without any additional styles", async () => {
    const text = "Hello World";
    const { container } = render(<AppText type={"TITLE"}>{text}</AppText>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text).tagName).toBe("P");
    expect(container).toMatchSnapshot();
  });
  it("should render default text with  additional styles", async () => {
    const text = "Hello World";
    const { container } = render(
      <AppText type={"TITLE"} numberOfLines={2} color={'red'}>
        {text}
      </AppText>
    );
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveStyle("line-clamp: 2; color: red");
    expect(container).toMatchSnapshot();
  });
});
