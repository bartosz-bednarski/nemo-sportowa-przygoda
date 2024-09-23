"use client";
import React from "react";
import styles from "./swimmingPoolCover.module.scss";
import Image from "next/image";

const SwimmingPoolCover: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
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
  );
};
export default SwimmingPoolCover;
