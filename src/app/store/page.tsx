import styles from "./page.sass";

const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
      }),
    }
  );
  const data = await response.json();
  return data;
};

const StorePage = async () => {
  const products = await getProducts();
  console.log("Store Page Rendered", products);

  return (
    <div className={styles.storePage}>
      <h1 className={styles.title}>Store Page</h1>
    </div>
  );
};

export default StorePage;
