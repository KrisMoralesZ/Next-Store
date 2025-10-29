import { CategoriesCards } from "@/components/categories/CategoriesCards";
import {
  getCollections,
  getSingleCollectionById,
} from "@/services/Collections/request";
import { Collection } from "@/types/types";

const CategoriesPage = async () => {
  const { smart_collections } = await getCollections();

  const collectionsWithDetails = await Promise.all(
    smart_collections.map(async (collection: Collection) => {
      const details = await getSingleCollectionById(collection.id.toString());
      return { ...collection, ...details };
    })
  );

  return <CategoriesCards categories={collectionsWithDetails} />;
};
export default CategoriesPage;
