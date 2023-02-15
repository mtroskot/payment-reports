import * as React from "react";
import { render, screen } from "@testing-library/react";
import Reports from "src/pages/Dashboard/Reports";
import { QueryClientTestWrapper } from "__tests__/setup/queryClient";
import userEvent from "@testing-library/user-event";

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

describe("renders Reports correctly", () => {
  it("should render empty report state", async () => {
    const { container } = render(
      <QueryClientTestWrapper>
        <Reports />
      </QueryClientTestWrapper>
    );
    expect(screen.getByText("reports")).toBeInTheDocument();
    expect(screen.getByText("easily_generate_report_of_transactions")).toBeInTheDocument();
    expect(screen.getByText("select_project")).toBeInTheDocument();
    expect(screen.getByText("select_gateway")).toBeInTheDocument();
    expect(screen.getByText("from_date")).toBeInTheDocument();
    expect(screen.getByText("to_date")).toBeInTheDocument();
    expect(screen.queryByText("all_gateways")).not.toBeInTheDocument();
    expect(screen.queryByText("all_projects")).not.toBeInTheDocument();
    expect(screen.getByText("generate_report")).toBeInTheDocument();
    expect(screen.getByText("no_reports")).toBeInTheDocument();
    expect(screen.getByText("no_reports_description")).toBeInTheDocument();
    expect(screen.getByTitle("alt_no_reports_icon")).toBeInTheDocument();
    await userEvent.click(screen.getByText("generate_report"));
    expect(container).toMatchSnapshot();
  });
  it("should change filters when selecting them", async () => {
    const { container } = render(
      <QueryClientTestWrapper>
        <Reports />
      </QueryClientTestWrapper>
    );
    await userEvent.click(screen.getByText("from_date"));
    await userEvent.click(screen.getByText("10"));
    await userEvent.click(screen.getByText("to_date"));
    await userEvent.click(screen.getByText("11"));
    expect(await screen.findByText("10/01/2023")).toBeInTheDocument();
    expect(await screen.findByText("11/01/2023")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
