import { render, screen, waitFor } from "@testing-library/react";
import { getCollections } from "@/services/Collections/request";
import CategoriesList from "@/components/categories/CategoriesList/CategoriesList";

// Mock the API service
jest.mock("@/services/Collections/request", () => ({
  getCollections: jest.fn(),
}));

// Mock next/link to avoid Next.js internals in tests
jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe("CategoriesList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders category links when API returns data", async () => {
    (getCollections as jest.Mock).mockResolvedValueOnce({
      smart_collections: [
        { id: "1", title: "Electronics" },
        { id: "2", title: "Books" },
      ],
    });

    render(await CategoriesList());

    await waitFor(() => {
      expect(
        screen.getByRole("link", { name: "Electronics" })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Books" })).toBeInTheDocument();
    });
  });

  it("shows fallback text when no categories are found", async () => {
    (getCollections as jest.Mock).mockResolvedValueOnce(null);

    render(await CategoriesList());

    await waitFor(() => {
      expect(screen.getByText("No categories found")).toBeInTheDocument();
    });
  });

  it("handles empty smart_collections array gracefully", async () => {
    (getCollections as jest.Mock).mockResolvedValueOnce({
      smart_collections: [],
    });

    render(await CategoriesList());

    await waitFor(() => {
      expect(screen.getByText("No categories found")).toBeInTheDocument();
    });
  });
});
