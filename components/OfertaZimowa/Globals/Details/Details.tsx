"use client";
import React from "react";
import styles from "./details.module.scss";
import DetailsBox from "./DetailsBox";
import { detailsComponentType } from "@/types/SummerWinter/Winter";

const Details: React.FC<{ details: detailsComponentType }> = ({ details }) => {
  return (
    <div className={styles.details}>
      <div className={styles["details__row-box"]}>
        <DetailsBox promo={false} label="MIEJSCE" content={details.location} />
        <DetailsBox promo={false} label="TERMIN" content={details.dateRange} />
        <DetailsBox promo={false} label="WIEK" content={details.ageRange} />
        <DetailsBox
          promo={details.promotion}
          label="CENA"
          content={details.price}
          promoPrice={details.promotionPrice}
          promoInfo={details.promotionInfo}
        />
      </div>
      <div className={styles["details__info-box"]}>
        <span className={styles["details__info-box__header"]}>
          {details.aboutTitle}
        </span>
        <span className={styles["details__info-box__text"]}>
          {details.aboutDescription}
        </span>
      </div>
      {details.about2Title !== undefined && (
        <div className={styles["details__info-box"]}>
          {details.about2Title !== undefined && (
            <span className={styles["details__info-box__header"]}>
              {details.about2Title}
            </span>
          )}
          {details.about2Description !== undefined && (
            <span className={styles["details__info-box__text"]}>
              {details.about2Description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
export default Details;
