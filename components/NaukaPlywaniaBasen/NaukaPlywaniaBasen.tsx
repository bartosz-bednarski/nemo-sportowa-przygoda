"use client";
import React from "react";
import styles from "./naukaPlywaniaBasen.module.scss";
import NaukaPlywaniaAbout from "../Globals/NaukaPlywaniaAbout/NaukaPlywaniaAbout";
import { aboutType, groupsType } from "@/types/NaukaPlywania/naukaPlywania";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";
import PriceList from "../Globals/PriceList/PriceList";
import { instructorsRowBoxType, priceListType } from "@/types/Globals/globals";
import Groups from "../Globals/Groups/Groups";

const NaukaPlywaniaBasen: React.FC<{
  about: aboutType;
  backgroundColor: customColors;
  instructors: instructorsRowBoxType;
  groups: groupsType;
  priceList?: priceListType;
}> = ({ about, backgroundColor, groups, priceList }) => {
  return (
    <div
      className={styles.naukaPlywaniaBasen}
      style={{ background: COLORS[backgroundColor] }}
    >
      <NaukaPlywaniaAbout
        stickerH2={about.stickerH2}
        aboutTextPoppins={about.aboutTextPoppins}
        image={about.image}
        button={about.button}
      />
      {priceList !== undefined && <PriceList priceList={priceList} />}

      <Groups stripH2={groups.stripH2} groups={groups.groups} />
    </div>
  );
};
export default NaukaPlywaniaBasen;
