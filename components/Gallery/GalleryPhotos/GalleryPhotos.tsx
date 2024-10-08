"use client";
import React from "react";
import styles from "./galleryPhotos.module.scss";
import { galleryItemType } from "@/types/Gallery/gallery";
import Image from "next/image";
import LogoMainBlack from "@/components/Globals/Logo/LogoMainBlack";
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
          <LogoMainBlack width="80%" height="auto" />
        </div>
        {data.images.landscapes.map((landscape, index) => (
          <div
            className={styles["galleryPhotos__row-container__column"]}
            key={`landscape${index}`}
          >
            {landscape[0] !== "" && (
              <span className={styles["galleryPhotos__landscape"]}>
                <Image
                  src={`/gallery/${data.href}/landscapes/${landscape[0]}.webp`}
                  alt={`${data.href}-landscape-${index}`}
                  title={`${data.href}-landscape-${index}`}
                  width={660}
                  height={338}
                  objectFit="cover"
                  loading="eager"
                />
              </span>
            )}
            {landscape[1] !== "" && (
              <span className={styles["galleryPhotos__landscape"]}>
                <Image
                  src={`/gallery/${data.href}/landscapes/${landscape[1]}.webp`}
                  alt={`${data.href}-landscape-${index}`}
                  title={`${data.href}-landscape-${index}`}
                  width={660}
                  height={338}
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
                src={`/gallery/${data.href}/portraits/${portrait}.webp`}
                alt={`${data.href}-portrait-${index}`}
                title={`${data.href}-portrait-${index}`}
                width={600}
                height={692}
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
