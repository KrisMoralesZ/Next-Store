import Image from "next/image";
import styles from "./ProductView.module.sass";
import { SanitizeHTML } from "@/components/shared/SanitizeHTML";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   tags: string;
//   quantity: number;
// }

// const product: Product = {
//   id: "1",
//   title: "Sample Product",
//   description:
//     "This is a sample product description. It provides details about the product.",
//   image: "/sample-product.jpg",
//   price: 29.99,
//   tags: "Sample, Product, Test",
//   quantity: 10,
// };

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

interface ProductViewProps {
  product: ProductType;
}

const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        <SanitizeHTML tag="p">{product.description}</SanitizeHTML>
        <span className={styles.ProductView__info__price}>
          $ {product.price}
        </span>
        {/* <ProductViewItemsOrder maxQuantity={product.quantity} /> */}
      </section>
    </main>
  );
};

export default ProductView;
