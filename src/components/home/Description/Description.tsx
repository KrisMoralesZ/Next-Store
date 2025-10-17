"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { PLACEHOLDER_IMAGE } from "./utils";
import styles from "./Description.module.sass";

const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);
  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description_imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description_text}>
        <h2>Bring your future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};

export default Description;
