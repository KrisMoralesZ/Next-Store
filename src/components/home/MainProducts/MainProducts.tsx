import Image from "next/image";
import { getProducts } from "@/services/Products/request";
import { IMainProducts } from "./utils";
import styles from "./MainProducts.module.sass";

const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section className={styles.MainProducts}>
      <h3> New products released</h3>
      <div className={styles.MainProducts__grid}>
        {products?.products?.map((product: IMainProducts) => (
          <article key={product.id}>
            <p>{product.title}</p>
            <Image
              src={product.images?.[0]?.src || "/placeholder.png"}
              alt={product.title || "Product image"}
              width={300}
              height={300}
              loading="eager"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainProducts;
