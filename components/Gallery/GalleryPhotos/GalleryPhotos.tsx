"use client";
import React from "react";
import styles from "./galleryPhotos.module.scss";
import { galleryItemType } from "@/types/Gallery/gallery";

const GalleryPhotos: React.FC<{ data: galleryItemType }> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.galleryPhotos}>
      <div className={styles["galleryPhotos__first-row"]}>
        <div
          className={styles["galleryPhotos__first-row__custom-portrait"]}
        ></div>
        <div className={styles["galleryPhotos__first-row__row-wrap"]}>
          <span className={styles["galleryPhotos__landscape"]}></span>
          <span className={styles["galleryPhotos__landscape"]}></span>
        </div>
        <div className={styles["galleryPhotos__first-row__row-wrap"]}>
          <span className={styles["galleryPhotos__landscape"]}></span>
          <span className={styles["galleryPhotos__landscape"]}></span>
        </div>
      </div>
    </div>
  );
};
export default GalleryPhotos;
