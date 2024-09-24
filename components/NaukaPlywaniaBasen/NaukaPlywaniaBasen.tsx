"use client";
import React from "react";
import styles from "./naukaPlywaniaBasen.module.scss";
import NaukaPlywaniaAbout from "../Globals/NaukaPlywaniaAbout/NaukaPlywaniaAbout";
import { aboutType } from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";
import PriceList from "../Globals/PriceList/PriceList";
import { CENNIK_NIEMOWLAKI_GORLICE } from "@/utils/NaukaPlywaniaBasen/naukaPlywaniaGorlice";
import InstructorsRowBox from "../Globals/InstructorsRowBox/InstructorsRowBox";
import { instructorsRowBoxType } from "@/types/Globals/globals";

const NaukaPlywaniaBasen: React.FC<{
  about: aboutType;
  backgroundColor: customColors;
  instructors: instructorsRowBoxType;
}> = ({ about, backgroundColor, instructors }) => {
  return (
    <div
      className={styles.naukaPlywaniaBasen}
      style={{ background: COLORS[backgroundColor] }}
    >
      <NaukaPlywaniaAbout
        stickerH2={about.stickerH2}
        aboutTextPoppins={about.aboutTextPoppins}
        image={about.image}
      />
      <PriceList priceList={CENNIK_NIEMOWLAKI_GORLICE} />
      <InstructorsRowBox
        instructors={instructors.instructors}
        bgColor={instructors.bgColor}
      />
    </div>
  );
};
export default NaukaPlywaniaBasen;
