import React from "react";
import Link from "next/link";
import { SanitizeHTML } from "../SanitizeHTML";
import styles from "./Card.module.sass";

export interface CardProps {
  title?: string;
  image?: string;
  description?: string;
  width?: number;
  height?: number;
  hasLink?: boolean;
  link?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  width = 400,
  height = 250,
  hasLink = false,
  link = "#",
}) => {
  return (
    <div className={styles.Card__Container}>
      {hasLink ? (
        <Link href={link} className={styles.Card__Link}>
          <h2 className={styles.Card__Header}>{title}</h2>
        </Link>
      ) : (
        <h2 className={styles.Card__Header}>{title}</h2>
      )}
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
        <SanitizeHTML tag="div">{description || ""}</SanitizeHTML>
      </div>
    </div>
  );
};

export default Card;
