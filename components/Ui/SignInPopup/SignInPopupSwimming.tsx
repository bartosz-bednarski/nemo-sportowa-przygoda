"use client";
import React, { useEffect, useState } from "react";
import styles from "./popup.module.scss";
import Image from "next/image";
import LinkButton from "../Buttons/LinkButton";
import { hasCookie, setCookie } from "cookies-next";
const SignInPopupSwimming: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (hasCookie("popup") === false) {
      setCookie("popup", 0);
      setShowPopup(true);
    }
  }, [showPopup]);
  const closePopupHandler = () => {
    setShowPopup(false);
  };
  return (
    <div
      className={styles.popup}
      style={{ display: showPopup ? "flex" : "none" }}
    >
      <div className={styles["popup__content-box"]}>
        <div className={styles["popup__content-box__column"]}>
          <h1>NAUKA PŁYWANIA</h1>
          <h3>KRAKÓW | KORZENNA | GORLICE</h3>
          <span>
            Dzieci od 3 miesiąca życia do 3 lat razem z rodzicami.Lorem ipsum
            dolor sit amet consectetur. Nunc vestibulum orci tincidunt sed
            tristique nullam. Lorem ipsum dolor sit amet consectetur. Nunc
            vestibulum orci tincidunt sed tristique nullam.
          </span>
          <LinkButton
            title="Sprawdź ofertę"
            bgColor="white"
            textColor="lightBlue"
            href="/"
            onClick={closePopupHandler}
          />
        </div>
        <Image
          src="/assets/popup/popup-swimmimg.webp"
          width={550}
          height={550}
          alt="nauka plywania NEMO"
          title="nauka plywania NEMO"
          objectFit="cover"
          objectPosition="left"
          className={styles["popup__content-box__image"]}
        />
      </div>
    </div>
  );
};
export default SignInPopupSwimming;
