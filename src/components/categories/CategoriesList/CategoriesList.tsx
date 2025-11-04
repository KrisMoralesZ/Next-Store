import { getCollections } from "@/services/Collections/request";
import Link from "next/link";
import styles from "./CategoriesList.module.sass";

const CategoriesList = async () => {
  const categories = await getCollections();

  const list = categories?.smart_collections ?? [];

  return (
    <div className={styles.CategoriesList__list}>
      {list.length > 0 ? (
        list.map((collection: { id: string; title: string }) => (
          <Link
            href={`/categories/${collection.id}`}
            key={collection.id}
            className={styles.CategoriesList__link}
          >
            {collection.title}
          </Link>
        ))
      ) : (
        <li>No categories found</li>
      )}
    </div>
  );
};
export default CategoriesList;
