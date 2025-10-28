import { Card } from "@/components/shared/Card";
import { ProductsCollection } from "@/types/types";

type Props = { products: ProductsCollection[] };

const CategoryCards = ({ products }: Props) => {
  return (
    <div>
      {products?.map((product: ProductsCollection) => (
        <div key={product.id}>
          <Card
            title={product.title}
            image={product.image?.src}
            description={product.body_html}
            hasLink={true}
            link={`/categories/${product.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
