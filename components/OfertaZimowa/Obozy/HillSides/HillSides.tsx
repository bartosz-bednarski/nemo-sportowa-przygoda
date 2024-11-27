"use client";
import React from "react";
import styles from "./hillSides.module.scss";
import { hillSidesCampComponentType } from "@/types/SummerWinter/Camps";
import StickerH2 from "@/components/Ui/StickerH2/StickerH2";
import Image from "next/image";

const HillSides: React.FC<{ hillSides: hillSidesCampComponentType }> = ({
  hillSides,
}) => {
  return (
    <div className={styles.hillSides}>
      <span className={styles["hillSides__header"]}>
        <StickerH2
          title="OPISY"
          titleStrip="STOKÓW"
          titleColor="darkBlue"
          stripBgColor="darkBlue"
          stripTextColor="white"
          scale={1.5}
          paddingBottom={0}
        />
      </span>
      <div className={styles["hillSides__list"]}>
        {hillSides.list.map((item, index) => (
          <div className={styles["hillSides__list__row-box"]} key={index}>
            <div className={styles["hillSides__list__row-box__content"]}>
              <span
                className={styles["hillSides__list__row-box__content__header"]}
              >
                {item.title}
              </span>
              <ul className={styles["hillSides__list__row-box__content__list"]}>
                {item.listAbout.map((listItem, index) => (
                  <li key={`listItem-${index}`}>{listItem}</li>
                ))}
              </ul>
            </div>
            <Image
              className={styles["hillSides__list__row-box__image"]}
              src={`/assets/winter/stoki/${item.image}.webp`}
              width={960}
              height={366}
              alt={item.image}
              title={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HillSides;
