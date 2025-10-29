import NotFound from "@/app/not-found";
import { render, screen } from "@testing-library/react";

describe("NotFound component", () => {
  it("renders correctly", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found.")).toBeInTheDocument();
    expect(
      screen.getByText("The page you are looking for does not exist.")
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("alt", "404");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/store");
  });
});
