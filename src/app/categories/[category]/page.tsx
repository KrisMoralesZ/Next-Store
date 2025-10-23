import { CategoryCards } from "@/components/categories/CategoryCards";
import { getCollectionById } from "@/services/Collections/SingleCollection/request";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const id = params.category;
  const data = await getCollectionById(id);

  return (
    <div>
      <h1>Collection ID: {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <CategoryCards />
    </div>
  );
}
