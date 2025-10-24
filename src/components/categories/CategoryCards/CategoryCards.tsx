import { Card } from "@/components/shared/Card";
import { ProductsCollection } from "@/types/types";

type Props = { products: any };

const CategoryCards = ({ products }: Props) => {
  return (
    <div>
      {products?.map((product: ProductsCollection) => (
        <div key={product.id}>
          <Card
            title={product.title}
            image={product.image?.src}
            description={product.body_html}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
