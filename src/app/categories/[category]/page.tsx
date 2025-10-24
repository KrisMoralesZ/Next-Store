import { CategoryCards } from "@/components/categories/CategoryCards";
import { getCollectionProducts } from "@/services/Collections/request";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const id = params.category;
  const { products: collectionProducts } = await getCollectionProducts(id);

  return (
    <div>
      <CategoryCards products={collectionProducts} />
    </div>
  );
}
