import React from "react";
import styles from "./backgroundText.module.scss";
const BackgroundText: React.FC<{ title: string }> = ({ title }) => {
  return <span className={styles.text}>{title}</span>;
};
export default BackgroundText;
