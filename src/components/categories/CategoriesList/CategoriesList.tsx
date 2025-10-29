"use client";
import { useEffect, useState } from "react";
import { getCollections } from "@/services/Collections/request";
import Link from "next/link";
import styles from "./CategoriesList.module.sass";

interface Collection {
  id: string;
  title: string;
}

const CategoriesList = () => {
  const [categories, setCategories] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCategories(data?.smart_collections || []);
        console.log("@@@@@data", data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.CategoriesList__list}>
      {categories.length > 0 ? (
        categories.map((c) => (
          <Link
            key={c.id}
            href={`/categories/${c.title}`}
            className={styles.CategoriesList__link}
          >
            {c.title}
          </Link>
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default CategoriesList;
