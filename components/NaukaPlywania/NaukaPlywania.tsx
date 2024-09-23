"use client";
import React from "react";
import styles from "./naukaPlywania.module.scss";
import About from "./About/About";
import Instructors from "./Instructors/Instructors";
const NaukaPlywania: React.FC = () => {
  return (
    <div className={styles.naukaPlywania}>
      <About />
      <Instructors />
    </div>
  );
};
export default NaukaPlywania;
