import React from "react";
import styles from "./instructorBubble.module.scss";
import Image from "next/image";

const InstructorBubble: React.FC<{ scale: number }> = ({ scale }) => {
  return (
    <div className={styles.insctructorBubble} style={{ scale: scale }}>
      <Image
        src="/assets/instructors/instructor-1.png"
        fill={true}
        alt="instructor"
      />
    </div>
  );
};
export default InstructorBubble;
