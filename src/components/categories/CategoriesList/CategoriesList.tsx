import { getCollections } from "@/services/Collections/request";
import Link from "next/link";
import styles from "./CategoriesList.module.sass";

const CategoriesList = async () => {
  const categories = await getCollections();

  return (
    <div className={styles.CategoriesList__list}>
      {categories ? (
        categories.smart_collections.map(
          (collection: { id: string; title: string }) => (
            <Link
              href={`/categories/${collection.title}`}
              key={collection.id}
              className={styles.CategoriesList__link}
            >
              {collection.title}
            </Link>
          )
        )
      ) : (
        <li>No categories found</li>
      )}
    </div>
  );
};
export default CategoriesList;
