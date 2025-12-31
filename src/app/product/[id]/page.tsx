import { ProductView } from "@/components/products/ProductView";
import { getProducts } from "@/services/Products/request";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;
  const id = params.id;

  const data = await getProducts(id);
  const product = data?.products?.[0];

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
};

export default ProductPage;
