"use client";
import React from "react";
import styles from "./swimmingPoolCover.module.scss";
import Image from "next/image";
import Link from "next/link";

const SwimmingPoolCover: React.FC<{
  image: string;
  title: string;
  url: string;
}> = ({ image, title, url }) => {
  return (
    <Link href={url}>
      <div className={styles["swimmingPoolCover"]}>
        <div className={styles["swimmingPoolCover__image-box"]}>
          <Image
            src={`/assets/swimming/pools/${image}`}
            fill={true}
            alt={title}
            style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          />
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
export default SwimmingPoolCover;
