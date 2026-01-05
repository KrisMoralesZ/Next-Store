import { render, screen } from "@testing-library/react";
import { Header } from "@/components/shared/Header";

// Mock next/link so it renders a normal <a> tag
jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
});

// Mock CategoriesList since it may fetch data or render complex UI
jest.mock("@/components/categories/CategoriesList", () => ({
  CategoriesList: () => <div data-testid="categories-list">CategoriesList</div>,
}));

describe("Header Component", () => {
  it("renders navigation links correctly", () => {
    render(<Header />);

    // Verify that the main links exist
    const homeLink = screen.getByRole("link", { name: "Home" });
    const categoriesLink = screen.getByRole("link", { name: "Categories" });

    expect(homeLink).toBeInTheDocument();
    expect(categoriesLink).toBeInTheDocument();

    // Check that the href attributes are correct
    expect(homeLink).toHaveAttribute("href", "/");
    expect(categoriesLink).toHaveAttribute("href", "/categories");
  });

  it("renders the CategoriesList component", () => {
    render(<Header />);
    expect(screen.getByTestId("categories-list")).toBeInTheDocument();
  });
});
