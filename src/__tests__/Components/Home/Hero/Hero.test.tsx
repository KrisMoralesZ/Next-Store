import { Hero } from "@/components/home/Hero";
import { render } from "@testing-library/react";

describe("Hero", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Hero />);
    expect(getByText("Future world")).toBeInTheDocument();
    expect(getByText("Empowering Your Tomorrow, Today!")).toBeInTheDocument();
  });
});
