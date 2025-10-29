import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/shared/Card";

describe("Card Component", () => {
  test("renders Card component with title and content", () => {
    render(
      <Card title="Test Card" description="This is a test card content." />
    );

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test card content.")
    ).toBeInTheDocument();
  });

  test("renders Card component without title", () => {
    render(<Card description="This is a test card content without title." />);

    expect(screen.queryByText("Test Card")).not.toBeInTheDocument();
    expect(
      screen.getByText("This is a test card content without title.")
    ).toBeInTheDocument();
  });
});
