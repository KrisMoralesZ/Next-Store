import { CategoryCards } from "@/components/categories/CategoryCards";
import {
  getCollectionProducts,
  getSingleCollectionById,
} from "@/services/Collections/request";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const id = params.category;
  const data = await getSingleCollectionById(id);
  const collectionProducts = await getCollectionProducts(id);

  return (
    <div>
      <h1>Collection ID: {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(collectionProducts, null, 2)}</pre>
      <CategoryCards />
    </div>
  );
}
