import Link from "next/link";
import { CategoriesList } from "@/components/categories/CategoriesList";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <nav className={styles.Header__list}>
      <Link href="/" className={styles.Header__link}>
        Home
      </Link>
      <Link href="/categories" className={styles.Header__link}>
        Categories
      </Link>
      <CategoriesList />
    </nav>
  );
};

export default Header;
