"use client";
import React from "react";
import styles from "./galleryPhotos.module.scss";
import { galleryItemType } from "@/types/Gallery/gallery";
import Image from "next/image";
import LogoMain from "@/components/Globals/Logo/LogoMain";
import { COLORS } from "@/utils/UI/colors";

const GalleryPhotos: React.FC<{ data: galleryItemType }> = ({ data }) => {
  return (
    <div className={styles.galleryPhotos}>
      <div className={styles["galleryPhotos__row-container"]}>
        <div
          className={styles["galleryPhotos__row-container__custom-portrait"]}
          style={{ background: COLORS[data.stripColor] }}
        >
          <h1
            className={
              styles["galleryPhotos__row-container__custom-portrait__title"]
            }
            style={{ color: COLORS[data.stripTextColor] }}
          >
            {data.title}
          </h1>
          <LogoMain width="80%" height="auto" />
        </div>
        {data.images.landscapes.map((landscape, index) => (
          <div
            className={styles["galleryPhotos__row-container__column"]}
            key={`landscape${index}`}
          >
            {landscape[0] !== "" && (
              <span className={styles["galleryPhotos__landscape"]}>
                <Image
                  src={`/gallery/${data.href}/landscapes/${landscape[0]}.jpeg`}
                  alt={`${data.href}${index}`}
                  fill={true}
                  objectFit="cover"
                  loading="eager"
                />
              </span>
            )}
            {landscape[1] !== "" && (
              <span className={styles["galleryPhotos__landscape"]}>
                <Image
                  src={`/gallery/${data.href}/landscapes/${landscape[1]}.jpeg`}
                  alt={`${data.href}${index}`}
                  fill={true}
                  objectFit="cover"
                  loading="eager"
                />
              </span>
            )}
          </div>
        ))}
        {data.images.portraits.map((portrait, index) => (
          <span
            className={styles["galleryPhotos__portrait"]}
            key={`portrait${index}`}
          >
            {portrait !== "" && (
              <Image
                src={`/gallery/${data.href}/portraits/${portrait}.jpeg`}
                alt={`${data.href}${index}`}
                fill={true}
                objectFit="cover"
                loading="lazy"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
export default GalleryPhotos;
