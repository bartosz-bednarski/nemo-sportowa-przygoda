"use client";
import React from "react";
import styles from "./naukaPlywania.module.scss";
import Instructors from "./Instructors/Instructors";
import Pools from "./Pools/Pools";
import { naukaPlywaniaType } from "@/types/NaukaPlywania/naukaPlywania";
import { COLORS } from "@/utils/UI/colors";
import NaukaPlywaniaAbout from "../Globals/NaukaPlywaniaAbout/NaukaPlywaniaAbout";
import Groups from "../Globals/Groups/Groups";

const NaukaPlywania: React.FC<naukaPlywaniaType> = ({
  about,
  instructors,
  pools,
  groups,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.naukaPlywania}
      style={{ background: COLORS[backgroundColor] }}
    >
      <NaukaPlywaniaAbout
        stickerH2={about.stickerH2}
        aboutTextPoppins={about.aboutTextPoppins}
        image={about.image}
      />
      <Instructors
        backgroundText={instructors.backgroundText}
        stripH3={instructors.stripH3}
        instructors={instructors.instructors}
      />
      <Pools
        stripH3={pools.stripH3}
        backgroundText={pools.backgroundText}
        swimmingPools={pools.swimmingPools}
      />
      {groups !== undefined && (
        <Groups stripH2={groups.stripH2} groups={groups.groups} />
      )}
    </div>
  );
};
export default NaukaPlywania;
