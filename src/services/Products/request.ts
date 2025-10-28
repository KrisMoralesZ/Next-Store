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

    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return transformedProducts;
  } catch (error) {
    console.log(error);
  }
};
