import { ProductView } from "@/components/products/ProductView";
import { getProducts } from "@/services/Products/request";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = params;

  const data = await getProducts(id);
  const product = data?.products?.[0];

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
};

export default ProductPage;
