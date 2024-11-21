"use client";
import React from "react";
import styles from "./colonyLink.module.scss";
import Link from "next/link";
import { campTypeCover } from "@/types/SummerWinter/Camps";
import Image from "next/image";

const ColonyLink: React.FC<{ data: campTypeCover }> = ({ data }) => {
  return (
    <Link
      className={styles.colonyLink}
      href={data.href}
      style={{ pointerEvents: data.active ? "all" : "none" }}
    >
      {!data.active && (
        <div className={styles.soldOut}>
          <span className={styles["soldOut__info"]}>WYPRZEDANE</span>
        </div>
      )}

      <Image
        className={styles["colonyLink__image"]}
        src={`/assets/${data.coverImage}`}
        width={400}
        height={200}
        objectFit="cover"
        objectPosition="center"
        alt="polkolonie zimowe"
      />
      <div className={styles["colonyLink__content"]}>
        <h3>{data.title}</h3>
        <span className={styles["colonyLink__content__date"]}>{data.date}</span>
        <span className={styles["colonyLink__content__localization"]}>
          {data.localization}
        </span>
        <span className={styles["colonyLink__content__price"]}>
          {data.price}
        </span>
        <span className={styles["colonyLink__content__button-fake"]}>
          Dowiedz się więcej
        </span>
      </div>
    </Link>
  );
};
export default ColonyLink;
