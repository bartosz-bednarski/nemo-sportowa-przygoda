"use client";
import React, { useEffect, useState } from "react";
import styles from "./popup.module.scss";
import Image from "next/image";
import LinkButton from "../Buttons/LinkButton";
import { hasCookie, setCookie } from "cookies-next";
import XBtn from "../Buttons/XBtn/XBtn";
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
        <span className={styles["popup__content-box__x-btn-box"]}>
          <XBtn onClick={closePopupHandler} />
        </span>
        <div className={styles["popup__content-box__column"]}>
          <h1>NAUKA PŁYWANIA</h1>
          <h3>KRAKÓW | KORZENNA | GORLICE</h3>
          <span>
            Rozpocznij przygodę z wodą niezależnie od wieku! Zapraszamy na
            zajęcia pływackie dostosowane do potrzeb każdej grupy wiekowej: od
            niemowląt, przez dzieci i młodzież, aż po dorosłych. <br />
            <br />
            Dołącz do nas i odkryj radość pływania z NEMO!
            <br />
          </span>
          <LinkButton
            title="Zapisz się"
            bgColor="white"
            textColor="lightBlue"
            href="https://zapisy.activenow.pl/szkola-plywania-nemo1/"
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
