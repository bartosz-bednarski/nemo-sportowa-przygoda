"use client";
import React, { useState } from "react";
import styles from "./navBar.module.scss";
import Image from "next/image";
import NavBtn from "@/components/Ui/Buttons/NavBtn/NavBtn";
import Navigation from "../Navigation/Navigation";

const NavBar: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles["navBar__logo"]}>
          <Image
            src="/assets/logo/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
          <span>Nemo Sportowa Przygoda</span>
        </div>
        <div className={styles["navBar__btns"]}>
          <NavBtn type="menu" onClick={() => setShowNavigation(true)} />
          <NavBtn type="customer-panel" onClick={() => {}} />
        </div>
      </nav>
      <Navigation
        showNavigation={showNavigation}
        hideNavigation={() => setShowNavigation(false)}
      />
    </>
  );
};

export default NavBar;
