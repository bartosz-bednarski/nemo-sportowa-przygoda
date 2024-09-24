"use client";
import React from "react";
import styles from "./instructorsRowBox.module.scss";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import { instructorsRowBoxType } from "@/types/Globals/globals";
import { COLORS } from "@/utils/UI/colors";
import InstructorBubble from "../InstructorBubble/InstructorBubble";

const InstructorsRowBox: React.FC<instructorsRowBoxType> = ({
  instructors,
  bgColor,
}) => {
  return (
    <div
      className={styles.instructorsRowBox}
      style={{ background: COLORS[bgColor] }}
    >
      <BackgroundText title="KADRA" />
      {instructors.map((instructor) => (
        <InstructorBubble
          key={instructor.instructorName}
          instructorName={instructor.instructorName}
          scale={instructor.scale}
          img1={instructor.img1}
          img2={instructor.img2}
          href={instructor.href}
        />
      ))}
    </div>
  );
};
export default InstructorsRowBox;
