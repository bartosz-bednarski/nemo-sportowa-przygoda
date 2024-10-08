"use client";
import React from "react";
import styles from "./navigation.module.scss";
import Image from "next/image";
import XBtn from "@/components/Ui/Buttons/XBtn/XBtn";
import Link from "next/link";
import LogoMainWhite from "../../Logo/LogoMainWhite";

const Navigation: React.FC<{
  showNavigation: boolean;
  hideNavigation: () => void;
  firstLoad: boolean;
  setFirstLoad: () => void;
}> = ({ showNavigation, hideNavigation, firstLoad, setFirstLoad }) => {
  if (firstLoad === true) {
    setTimeout(() => {
      setFirstLoad();
    }, 500);
  }
  return (
    <div
      className={`${styles.navigation} ${
        !showNavigation && styles["navigation-hide"]
      }`}
      style={{
        opacity: firstLoad ? "0" : "1",
      }}
    >
      <div
        className={`${styles["navigation__top-box"]} ${
          !showNavigation && styles["navigation-hideContent"]
        }`}
      >
        <span className={styles["navigation__top-box__logo"]}>
          <LogoMainWhite height="100px" width="auto" />
        </span>

        <XBtn onClick={hideNavigation} />
      </div>
      <div
        className={`${styles["navigation__bottom-box"]} ${
          !showNavigation && styles["navigation-hideContent"]
        }`}
      >
        <div className={styles["navigation__bottom-box__20"]}></div>
        <div className={styles["navigation__bottom-box__80"]}>
          <ul>
            <li>
              <Link href="/" onClick={hideNavigation}>
                <span className={styles["navigation__bottom-box__80__nav"]}>
                  Strona główna
                </span>
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/krakow" onClick={hideNavigation}>
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
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/korzenna" onClick={hideNavigation}>
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
              </Link>
            </li>
            <li>
              <Link href="/naukaplywania/gorlice" onClick={hideNavigation}>
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
              </Link>
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
              <Link href="/naszzespol" onClick={hideNavigation}>
                <span className={styles["navigation__bottom-box__80__nav"]}>
                  nasz zespół
                </span>
              </Link>
            </li>
            <li>
              <Link href="/galeria" onClick={hideNavigation}>
                <span className={styles["navigation__bottom-box__80__nav"]}>
                  galeria
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/naukaplywania/poradnikbasenowy"
                onClick={hideNavigation}
              >
                <span className={styles["navigation__bottom-box__80__nav"]}>
                  Poradnik basenowy
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["navigation__bottom-box__20"]}>
          <span
            className={styles["navigation__bottom-box__20__contact"]}
            style={{ color: "#669AD7" }}
          >
            Skontaktuj się z nami
          </span>
          <span className={styles["navigation__bottom-box__20__contact"]}>
            +48 505 189 956
          </span>
          <span className={styles["navigation__bottom-box__20__contact"]}>
            nemosportowaprzygoda@gmail.com
          </span>
          <span className={styles["navigation__bottom-box__20__contact"]}>
            <Image
              src="/assets/ui/Icons/social/logo-facebook.png"
              width={20}
              height={20}
              alt="facebook"
              className={styles["navigation__bottom-box__20__contact__icon"]}
            />
            <Image
              src="/assets/ui/Icons/social/logo-instagram.png"
              width={20}
              height={20}
              alt="instagram"
              className={styles["navigation__bottom-box__20__contact__icon"]}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
