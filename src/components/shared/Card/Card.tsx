// src/components/shared/Card.tsx
import React from "react";
import styles from "./Card.module.sass";

export interface CardProps {
  title?: string;
  image?: string;
  description?: string;
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  width = 400,
  height = 250,
}) => {
  return (
    <div className={styles.Card__Container}>
      <h2 className={styles.Card__Header}>{title}</h2>
      <div className={styles.Card__Content}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title ?? "Card image"}
            width={width}
            height={height}
            style={{
              objectFit: "cover",
              display: "block",
              width: "100%",
              height,
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height,
              background: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            No image
          </div>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
