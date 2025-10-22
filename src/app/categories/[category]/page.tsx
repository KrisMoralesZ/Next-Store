// import { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import { getCollectionById } from "@/services/Collections/SingleCollection/request";

// export default async function CategoryPage({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const collection = await getCollectionById(params.category);
//   return (
//     <div>
//       <h1>{collection?.smart_collection?.title}</h1>
//       <p>ID: {collection?.smart_collection?.id}</p>
//     </div>
//   );
//   const id = params.category;

//   console.log("Route params:", params);
//   console.log("Category Page rendered for ID:", id);

//   // useEffect(() => {
//   //   if (!id) {
//   //     console.log("No ID yet, skipping fetch...");
//   //     return;
//   //   }

//   //   const fetchCollection = async () => {
//   //     try {
//   //       const data = await getCollectionById(id as string);
//   //       setCollection(data);
//   //       console.log("Fetching collection data...", data);
//   //     } catch (error) {
//   //       console.error("Error fetching collection:", error);
//   //     }
//   //   };
//   //   fetchCollection();
//   // }, [id]);

//   return (
//     <div>
//       {/* <h1>{collection?.smart_collection?.title}</h1>
//       <p>ID: {collection?.smart_collection?.id}</p> */}
//       <h1>Collection</h1>
//     </div>
//   );
// }
// export default CategoryPage;

// app/categories/[category]/page.tsx
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
    </div>
  );
}
