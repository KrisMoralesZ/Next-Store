import { Card } from "@/components/shared/Card";
import { Collection } from "@/types/types";
import styles from "./CategoriesCards.module.sass";

type Props = { categories: Collection[] };

const CategoriesCards = ({ categories }: Props) => {
  return (
    <div className={styles.CategoriesCards__container}>
      {categories.map((category) => (
        <div key={category.id}>
          <Card
            title={category.title}
            image={category.image?.src}
            description={category.body_html}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriesCards;
