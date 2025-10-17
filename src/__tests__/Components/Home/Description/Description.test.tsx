import { render } from "@testing-library/react";
import Description from "@/components/home/Description/Description";
describe("Description", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Description />);
    expect(getByText("Bring your future today")).toBeInTheDocument();
    expect(
      getByText(
        "Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us."
      )
    ).toBeInTheDocument();
  });
});
