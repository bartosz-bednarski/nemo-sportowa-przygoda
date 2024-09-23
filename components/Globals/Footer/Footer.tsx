"use client";
import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer__logo"]}>
        <Image src="/assets/logo/logo.png" width={60} height={60} alt="logo" />
        <span>COPYRIGHT © Nemo Sportowa Przygoda</span>
      </div>
      <ul className={styles["footer__navigation"]}>
        <li>POLITYKA PRYWATNOŚCI</li>
        <li>KONTAKT</li>
        <li>GALERIA</li>
      </ul>
      <ul className={styles["footer__navigation"]}>
        <li>
          <Image
            src="/assets/ui/Icons/social/logo-facebook.png"
            width={40}
            height={40}
            alt="facebook"
          />
        </li>
        <li>
          <Image
            src="/assets/ui/Icons/social/logo-instagram.png"
            width={40}
            height={40}
            alt="instagram"
          />
        </li>
      </ul>
    </div>
  );
};
export default Footer;
