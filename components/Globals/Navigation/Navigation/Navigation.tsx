"use client";
import React from "react";
import styles from "./navigation.module.scss";
import Image from "next/image";
import XBtn from "@/components/Ui/Buttons/XBtn/XBtn";

const Navigation: React.FC<{
  showNavigation: boolean;
  hideNavigation: () => void;
}> = ({ showNavigation, hideNavigation }) => {
  return (
    <div
      className={`${styles.navigation} ${
        !showNavigation && styles["navigation-hide"]
      }`}
      onClick={() => hideNavigation()}
    >
      <div className={styles["navigation__top-box"]}>
        <Image src="/assets/logo/logo.png" width={50} height={50} alt="logo" />
        <XBtn />
      </div>
      <div className={styles["navigation__bottom-box"]}>
        <div className={styles["navigation__bottom-box__20"]}></div>
        <div className={styles["navigation__bottom-box__80"]}>
          <ul>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                Strona główna
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                Nauka pływania
                <span
                  className={
                    styles["navigation__bottom-box__80__nav__location"]
                  }
                >
                  kraków
                </span>
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                Nauka pływania
                <span
                  className={
                    styles["navigation__bottom-box__80__nav__location"]
                  }
                >
                  korzenna
                </span>
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                Nauka pływania
                <span
                  className={
                    styles["navigation__bottom-box__80__nav__location"]
                  }
                >
                  gorlice
                </span>
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                obozy & półkolonie
                <span
                  className={
                    styles["navigation__bottom-box__80__nav__location"]
                  }
                >
                  LATO
                </span>
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                obozy & półkolonie
                <span
                  className={
                    styles["navigation__bottom-box__80__nav__location"]
                  }
                >
                  ZIMA
                </span>
              </span>
            </li>
            <li>
              {" "}
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                nasz zespół
              </span>
            </li>
            <li>
              <span className={styles["navigation__bottom-box__80__nav"]}>
                {" "}
                galeria
              </span>
            </li>
          </ul>
        </div>
        <div className={styles["navigation__bottom-box__20"]}></div>
      </div>
    </div>
  );
};
export default Navigation;
