import React from "react";
import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component tests", () => {
  test("renders the correct background color when isHeader is true", () => {
    render(<CourseListRow isHeader={true} textFirstCell="First cell" />);

    const row = screen.getByRole("row");
    const cell = screen.getByRole("columnheader");

    // Check the row's background color for header
    expect(row).toHaveStyle({ backgroundColor: "#deb5b545" });
    expect(cell).toHaveStyle({ backgroundColor: "#deb5b545" });
  });

  test("renders the correct background color when isHeader is true and secondTextCell is not null", () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell="First cell"
        textSecondCell="Second cell"
      />
    );

    const row = screen.getByRole("row");
    const firstCell = screen.getAllByRole("columnheader")[0];
    const secondCell = screen.getAllByRole("columnheader")[1];

    // Check the row's background color for header with two cells
    expect(row).toHaveStyle({ backgroundColor: "#deb5b545" });
    expect(firstCell).toHaveStyle({ backgroundColor: "#deb5b545" });
    expect(secondCell).toHaveStyle({ backgroundColor: "#deb5b545" });
  });

  test("renders the correct background color when isHeader is false", () => {
    render(
      <CourseListRow
        isHeader={false}
        textFirstCell="First cell"
        textSecondCell="Second cell"
      />
    );

    const row = screen.getByRole("row");
    const firstCell = screen.getAllByRole("cell")[0];
    const secondCell = screen.getAllByRole("cell")[1];

    // Check the row's background color for non-header row
    expect(row).toHaveStyle({ backgroundColor: "#f5f5f5ab" });
    expect(firstCell).toHaveStyle({ backgroundColor: "#f5f5f5ab" });
    expect(secondCell).toHaveStyle({ backgroundColor: "#f5f5f5ab" });
  });
});
