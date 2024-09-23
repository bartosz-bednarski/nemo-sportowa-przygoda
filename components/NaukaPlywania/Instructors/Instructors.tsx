"use client";
import React from "react";
import styles from "./instructors.module.scss";
import StripH3 from "@/components/Ui/StripH3/StripH3";
import InstructorBubble from "@/components/Globals/InstructorBubble/InstructorBubble";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";

const Instructors: React.FC = () => {
  return (
    <div className={styles.instructors}>
      <BackgroundText title="INSTRUKTORZY" />
      <StripH3
        title="Z KIM BĘDZIECIE PŁYWAĆ?"
        scale={1.9}
        stripBgColor="white"
        stripTextColor="lightBlue"
        marginBottom="4rem"
      />
      <div className={styles["instructors__row-box"]}>
        <InstructorBubble instructorName="WIKTORIA FRYCZEK" scale={0.7} />
        <InstructorBubble instructorName="WIKTORIA FRYCZEK" scale={0.7} />
        <InstructorBubble instructorName="WIKTORIA FRYCZEK" scale={0.7} />
      </div>
    </div>
  );
};
export default Instructors;
