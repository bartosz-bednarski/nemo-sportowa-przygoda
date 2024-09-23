"use client";
import React from "react";
import styles from "./groups.module.scss";
import StripH3 from "@/components/Ui/StripH3/StripH3";
import { groupsType } from "@/types/NaukaPlywania/naukaPlywania";
import GroupLvl from "@/components/Globals/GroupLvl/GroupLvl";

const Groups: React.FC<groupsType> = ({ stripH3, groups }) => {
  return (
    <div className={styles.groups}>
      <StripH3
        title={stripH3.title}
        stripBgColor={stripH3.stripBgColor}
        stripTextColor={stripH3.stripTextColor}
        scale={stripH3.scale}
      />
      <div className={styles["groups__row-box"]}>
        {groups.map((group) => (
          <GroupLvl
            key={group.stickerH4.titleStrip}
            stickerH4={group.stickerH4}
            aboutTextPoppins={group.aboutTextPoppins}
          />
        ))}
      </div>
    </div>
  );
};
export default Groups;
