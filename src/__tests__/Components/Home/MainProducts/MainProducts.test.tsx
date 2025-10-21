import { render, screen, waitFor } from "@testing-library/react";
import MainProducts from "@/components/home/MainProducts/MainProducts";
import { getProducts } from "@/components/home/MainProducts/request";

interface IMockImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

jest.mock("next/image", () => {
  const MockNextImage = (props: IMockImageProps) => {
    const { alt = "", ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...rest} />;
  };
  MockNextImage.displayName = "MockNextImage";
  return MockNextImage;
});

// Mock the getProducts API call
jest.mock("@/components/home/MainProducts/request", () => ({
  getProducts: jest.fn(),
}));

describe("MainProducts component", () => {
  it("renders products correctly", async () => {
    // Mock product data
    (getProducts as jest.Mock).mockResolvedValueOnce({
      products: [
        {
          id: 1,
          title: "Next.js T-shirt",
          images: [{ src: "https://cdn.shopify.com/fake.jpg" }],
        },
        {
          id: 2,
          title: "React Hoodie",
          images: [{ src: "https://cdn.shopify.com/fake2.jpg" }],
        },
      ],
    });

    render(await MainProducts());

    // Wait until the titles appear
    await waitFor(() => {
      expect(screen.getByText("Next.js T-shirt")).toBeInTheDocument();
      expect(screen.getByText("React Hoodie")).toBeInTheDocument();
    });

    // Check that images render correctly
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute(
      "src",
      "https://cdn.shopify.com/fake.jpg"
    );
  });

  it("uses a placeholder image when no images are available", async () => {
    (getProducts as jest.Mock).mockResolvedValueOnce({
      products: [
        {
          id: 3,
          title: "Product without image",
          images: [],
        },
      ],
    });

    render(await MainProducts());

    await waitFor(() => {
      expect(screen.getByText("Product without image")).toBeInTheDocument();
    });

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/placeholder.png");
  });

  it("displays the section heading", async () => {
    (getProducts as jest.Mock).mockResolvedValueOnce({ products: [] });

    render(await MainProducts());

    expect(screen.getByText("New products released")).toBeInTheDocument();
  });
});
