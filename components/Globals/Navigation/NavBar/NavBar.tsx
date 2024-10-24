"use client";
import React, { useState } from "react";
import styles from "./navBar.module.scss";
import NavBtn from "@/components/Ui/Buttons/NavBtn/NavBtn";
import Navigation from "../Navigation/Navigation";
import LogoMainWhite from "../../Logo/LogoMainWhite";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles["navBar__logo"]}>
          {/* <Image
            src="/assets/logo/logo.png"
            width={50}
            height={50}
            alt="logo"
          /> */}
          <Link href="/">
            <LogoMainWhite width="auto" height="100px" />
          </Link>
        </div>
        <div className={styles["navBar__btns"]}>
          <NavBtn type="menu" onClick={() => setShowNavigation(true)} />
          <NavBtn type="customer-panel" onClick={() => {}} />
        </div>
      </nav>
      <Navigation
        showNavigation={showNavigation}
        hideNavigation={() => setShowNavigation(false)}
        firstLoad={firstLoad}
        setFirstLoad={() => setFirstLoad(false)}
      />
    </>
  );
};

export default NavBar;
