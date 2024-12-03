"use client";
import React from "react";
import styles from "./poolTutorial.module.scss";
import BackgroundText from "@/components/Ui/BackgroundText/BackgroundText";
// import { customColors } from "@/types/UI/colors";
import { COLORS } from "@/utils/UI/colors";
import { poolTutorialType } from "@/types/Globals/globals";
import StripH4 from "@/components/Ui/StripH4/StripH4";

const PoolTutorial: React.FC<{ poolTutorial: poolTutorialType }> = ({
  poolTutorial,
}) => {
  return (
    <div
      className={styles.poolTutorial}
      style={{ background: COLORS[poolTutorial.color] }}
    >
      {poolTutorial.header && poolTutorial.stripH4 !== undefined && (
        <StripH4
          type="h4"
          title={poolTutorial.stripH4.title}
          stripBgColor={poolTutorial.stripH4.stripBgColor}
          stripTextColor={poolTutorial.stripH4.stripTextColor}
          scale={poolTutorial.stripH4.scale}
          marginBottom={poolTutorial.stripH4.marginBottom}
        />
      )}

      <div className={styles["poolTutorial__row-box"]}>
        <BackgroundText title="PORADNIK KROK PO KROKU" />
        <div className={styles["poolTutorial__row-box__circle"]}>
          {poolTutorial.firstRule}
        </div>

        {poolTutorial.rules.map((rule, index) => (
          <>
            <svg
              width="124"
              height="58"
              viewBox="0 0 124 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["poolTutorial__row-box__arrow"]}
            >
              <path
                d="M124.011 29L74.0112 0.132486V57.8675L124.011 29ZM0.929688 34H79.0112V24H0.929688V34Z"
                fill={index % 2 === 0 ? "white" : COLORS.basicOrange}
              />
            </svg>
            <div className={styles["poolTutorial__row-box__circle"]}>
              {rule}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default PoolTutorial;
