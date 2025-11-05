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

  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
};

export default ProductPage;
