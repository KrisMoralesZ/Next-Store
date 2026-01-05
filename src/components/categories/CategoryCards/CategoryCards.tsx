import { Card } from "@/components/shared/Card";
import { ProductsCollection } from "@/types/types";
import styles from "./CategoryCards.module.sass";

type Props = { products: ProductsCollection[] };

const CategoryCards = ({ products }: Props) => {
  return (
    <div className={styles.CategoryCards__container}>
      {products?.map((product: ProductsCollection) => (
        <div key={product.id}>
          <Card
            title={product.title}
            image={product.image?.src}
            description={product.body_html}
            hasLink={true}
            link={`/product/${product.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
