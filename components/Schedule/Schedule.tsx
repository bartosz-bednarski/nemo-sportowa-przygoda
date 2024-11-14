"use client";
import React from "react";
import styles from "./schedule.module.scss";

const Schedule: React.FC<{ src: string }> = ({ src }) => {
  const tableStyles = ".activenow-table-name{font-size:0.7rem;};";
  return (
    <div className={styles.schedule}>
      <h2>HARMONOGRAM</h2>
      <div
        className={`${tableStyles} ${"activenow-table-container"} ${
          styles["schedule__table"]
        }`}
      >
        <center>
          <img
            src="https://www.activenow.io/assets/ripple.gif"
            width="100px"
            alt="active now"
          />
        </center>
        <script async src={src}></script>
      </div>
    </div>
  );
};
export default Schedule;
