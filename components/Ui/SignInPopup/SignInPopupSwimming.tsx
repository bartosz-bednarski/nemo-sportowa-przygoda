'use client';
import React, {useEffect, useState} from 'react';
import styles from './popup.module.scss';
import LinkButton from '../Buttons/LinkButton';
import {hasCookie, setCookie} from 'cookies-next';
import XBtn from '../Buttons/XBtn/XBtn';
import PopupImage from '@/public/assets/popup/popup-swimmimg.webp';

const SignInPopupSwimming = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (hasCookie('popup') === false) {
      setCookie('popup', 0);
      setShowPopup(true);
    }
  }, [showPopup]);

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <div
      className={styles.popup}
      style={{display: showPopup ? 'flex' : 'none'}}
    >
      <div className={styles.contentBox}>
        <span className={styles.xBtnBox}>
          <XBtn onClick={closePopupHandler} />
        </span>
        <div className={styles.columnFlex}>
          <span className={styles.header}>
            <b>NAUKA PŁYWANIA</b>
            <br /> KRAKÓW | KORZENNA | GORLICE
          </span>
          <p>
            Rozpocznij przygodę z wodą niezależnie od wieku! Zapraszamy na
            zajęcia pływackie dostosowane do potrzeb każdej grupy wiekowej: od
            niemowląt, przez dzieci i młodzież, aż po dorosłych. <br />
            <br />
            Dołącz do nas i odkryj radość pływania z NEMO!
            <br />
          </p>
          <LinkButton
            title="Zapisz się"
            bgColor="white"
            textColor="lightBlue"
            href="https://zapisy.activenow.pl/szkola-plywania-nemo1/"
            onClick={closePopupHandler}
          />
        </div>
        <img
          src={PopupImage.src}
          width={550}
          height={550}
          alt="nauka plywania NEMO"
          title="nauka plywania NEMO"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default SignInPopupSwimming;
