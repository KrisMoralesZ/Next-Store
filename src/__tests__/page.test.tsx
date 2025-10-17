import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders the welcome message", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Main Products")).toBeInTheDocument();
  });
});
