"use client";
import React from "react";
import styles from "./galleryLink.module.scss";
import Image from "next/image";
import Link from "next/link";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "../../../utils/UI/colors";

const GalleryLink: React.FC<{
  href: string;
  img: string;
  bgColor: customColors;
  textColor: customColors;
}> = ({ href, img, bgColor, textColor }) => {
  return (
    <Link
      href={href}
      className={styles.galleryLink}
      style={{ background: COLORS[bgColor] }}
    >
      <Image
        className={styles["galleryLink__image"]}
        src={img}
        width={1920}
        height={300}
        alt="galeria"
      />
      <span
        className={styles["galleryLink__text"]}
        style={{ color: COLORS[textColor] }}
      >
        SPRAWDŹ NASZĄ
        <br /> GALERIĘ
      </span>
    </Link>
  );
};
export default GalleryLink;
