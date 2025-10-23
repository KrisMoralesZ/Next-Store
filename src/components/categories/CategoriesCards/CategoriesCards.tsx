import { Card } from "@/components/shared/Card";
import { Collection } from "@/types/types";

type Props = { categories: Collection[] };

const CategoriesCards = ({ categories }: Props) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <div>{category.title}</div>
          <Card title={category.title} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesCards;
