"use client";
import React from "react";
import styles from "./instructorBubble.module.scss";
import Image from "next/image";

const InstructorBubble: React.FC<{
  scale: number;
  instructorName?: string;
}> = ({ scale, instructorName }) => {
  return (
    <div className={styles.insctructorBubble} style={{ scale: scale }}>
      <div className={styles["insctructorBubble__image"]}>
        <Image
          src="/assets/instructors/instructor-1.png"
          fill={true}
          alt="instructor"
        />
      </div>
      <span className={styles["insctructorBubble__title"]}>
        {instructorName}
      </span>
    </div>
  );
};
export default InstructorBubble;
