export const getCollections = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/smart_collections.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collections:", error);
  }
};

export const getSingleCollectionById = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/smart_collections/${id}.json?`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collection by ID:", error);
  }
};

export const getCollectionProducts = async (collectionId: string) => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/collections/${collectionId}/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collection products:", error);
  }
};
