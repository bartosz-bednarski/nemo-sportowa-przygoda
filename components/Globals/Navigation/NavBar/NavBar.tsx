"use client";
import React, { useState } from "react";
import styles from "./navBar.module.scss";
import NavBtn from "@/components/Ui/Buttons/NavBtn/NavBtn";
import Navigation from "../Navigation/Navigation";
import LogoMainWhite from "../../Logo/LogoMainWhite";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const router = useRouter();
  return (
    <>
      <nav
        className={styles.navBar}
        style={{ zIndex: showNavigation ? 10 : 11 }}
      >
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
          <NavBtn
            type="customer-panel"
            onClick={() => {
              router.push("https://app.activenow.io/users/sign_in");
            }}
          />
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
