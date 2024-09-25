"use client";
import React from "react";
import styles from "./poolTutorial.module.scss";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";

const PoolTutorial: React.FC<{ color: customColors }> = ({ color }) => {
  return (
    <div className={styles.poolTutorial} style={{ background: COLORS[color] }}>
      <BackgroundText title="PORADNIK KROK PO KROKU" />
      <div className={styles["poolTutorial__circle"]}>
        ZOSTAW UBRANIA WIERZCHNIE W SZATNI
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill="white"
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        UDAJ SIĘ DO KAS BASENOWYCH CELEM POBRANIA ZEGARKA DO SZAFKI
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill={COLORS.basicOrange}
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        ODBIJ ZEGAREK NA BRAMCE
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill="white"
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        PRZYGOTUJ SIĘ DO ZAJĘĆ
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill={COLORS.basicOrange}
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        INSTRUKTORZY ODBIERAJĄ DZIECI W MIEJSCU WYJŚCIA Z SZATNI NA NIECKĘ
        BASENOWĄ
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill="white"
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        ZAJĘCIA TRWAJĄ 45 MIN
      </div>
      <svg
        width="124"
        height="58"
        viewBox="0 0 124 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["poolTutorial__arrow"]}
      >
        <path
          d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
          fill={COLORS.basicOrange}
        />
      </svg>

      <div className={styles["poolTutorial__circle"]}>
        PO ZAKOŃCZONYCH ZAJĘCIACH RODZICE ODBIERAJĄ DZIECI W SZATNI
      </div>
    </div>
  );
};
export default PoolTutorial;
