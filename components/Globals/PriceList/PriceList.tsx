"use client";
import React from "react";
import styles from "./priceList.module.scss";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import PriceLessons from "../PriceLessons/PriceLessons";
import { priceListType } from "@/types/Globals/globals";

const PriceList: React.FC<{ priceList: priceListType }> = ({ priceList }) => {
  return (
    <div className={styles.priceList}>
      <BackgroundText title="CENNIK" />
      {priceList.map((listItem) => (
        <PriceLessons
          stickerH4={listItem.stickerH4}
          oneLesson={listItem.oneLesson}
          tenLessons={listItem.tenLessons}
          key={listItem.stickerH4.titleStrip}
          button={listItem.button}
        />
      ))}
    </div>
  );
};

export default PriceList;
