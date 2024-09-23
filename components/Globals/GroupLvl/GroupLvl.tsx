"use client";
import React from "react";
import styles from "./groupLvl.module.scss";
import StickerH4 from "@/components/Ui/StickerH4/StickerH4";
import { groupLvlType } from "@/types/Globals/globals";
import AboutTextPoppins from "@/components/Ui/AboutTextPoppins/AboutTextPoppins";

const GroupLvl: React.FC<groupLvlType> = ({ stickerH4, aboutTextPoppins }) => {
  return (
    <div className={styles.groupLvl}>
      <StickerH4
        titleStrip={stickerH4.titleStrip}
        title={stickerH4.title}
        stripTextColor={stickerH4.stripTextColor}
        stripBgColor={stickerH4.stripBgColor}
        scale={stickerH4.scale}
        paddingBottom={stickerH4.paddingBottom}
      />
      <AboutTextPoppins
        title={aboutTextPoppins.title}
        titleColor={aboutTextPoppins.titleColor}
        description={aboutTextPoppins.description}
      />
    </div>
  );
};
export default GroupLvl;
