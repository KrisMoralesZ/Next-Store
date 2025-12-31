import { CategoryCards } from "@/components/categories/CategoryCards";
import { getCollectionProducts } from "@/services/Collections/request";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const id = (await params).category;
  const { products: collectionProducts } = await getCollectionProducts(id);

  return (
    <div>
      <CategoryCards products={collectionProducts} />
    </div>
  );
}
