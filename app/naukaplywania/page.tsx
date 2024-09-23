import NaukaPlywania from "@/components/NaukaPlywania/NaukaPlywania";
import styles from "../page.module.scss";
import React from "react";
import VideosSection from "@/components/Globals/VideosSection";
const NaukaPlywaniaPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <VideosSection />
      <NaukaPlywania />
    </main>
  );
};
export default NaukaPlywaniaPage;
