"use client";
import React from "react";
import styles from "./galleryLink.module.scss";
import Image from "next/image";
import Link from "next/link";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";

const GalleryLink: React.FC<{
  href: string;
  img: string;
  color: customColors;
}> = ({ href, img, color }) => {
  return (
    <Link
      href={href}
      className={styles.galleryLink}
      style={{ background: COLORS[color] }}
    >
      <Image
        className={styles["galleryLink__image"]}
        src={img}
        width={1920}
        height={300}
        alt="galeria"
      />
      <span className={styles["galleryLink__text"]}>
        SPRAWDŹ NASZĄ
        <br /> GALERIĘ
      </span>
    </Link>
  );
};
export default GalleryLink;
