export const getProducts = async (id?: string) => {
  try {
    const apiUrl = `${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/products.json`;

    const apiEndpoint = id ? `${apiUrl}?ids=${id}` : apiUrl;
    const response = await fetch(apiEndpoint, {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
      }),
    });
    const { products } = await response.json();
    console.log("Fetched products:", products);
    return { products };
  } catch (error) {
    console.log(error);
  }
};
