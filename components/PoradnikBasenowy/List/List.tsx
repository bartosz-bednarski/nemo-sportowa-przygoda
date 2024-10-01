"use client";
import React from "react";
import styles from "./list.module.scss";
import Link from "next/link";

const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <ul>
        <li className={styles["list__header"]}>
          <Link href="#1">1. ZAPISY NA ZAJĘCIA</Link>
        </li>
        <li>
          <Link href="#1">1.1. CO TO JEST ACTIVE NOW?</Link>
        </li>
        <li>
          <Link href="#1">1.2. NOWY KLIENT</Link>
        </li>
        <li>
          <Link href="#1">1.3. KLIENT KONTYNUUJĄCY NAUKĘ</Link>
        </li>
        <li>
          <Link href="#1">1.4. W JAKICH TERMINACH ODBYWAJĄ SIĘ ZAJĘCIA?</Link>
        </li>
        <li className={styles["list__header"]}>
          <Link href="#2">2. CENNIK I OPŁATY</Link>
        </li>
        <li>
          <Link href="#2">2.1. CZY MUSZĘ PŁACIĆ ZA BILET WSTĘPU NA BASEN?</Link>
        </li>
        <li>
          <Link href="#2">2.2. JAKIE SĄ TERMINY PŁATNOŚCI?</Link>
        </li>
        <li>
          <Link href="#2">2.3. CZY MOŻNA OPŁACIĆ KURS W RATACH</Link>
        </li>
        <li className={styles["list__header"]}>
          <Link href="#3">3. ORGANIZACJA ZAJĘĆ</Link>
        </li>
        <li>
          <Link href="#3">3.1. ODRABIANIE ZAJĘĆ</Link>
        </li>
        <li>
          <Link href="#3">3.2. ILE OSÓB LICZY GRUPA NA ZAJĘCIACH?</Link>
        </li>
        <li>
          <Link href="#3">3.3. CZY MOŻNA WEJŚĆ Z DZIECKIEM DO SZATNI?</Link>
        </li>
        <li className={styles["list__header"]}>
          <Link href="#4">4. CO ZABRAĆ NA BASEN?</Link>
        </li>
        <li className={styles["list__header"]}>
          <Link href="#5">5. ZASADY NA BASENIE </Link>
        </li>
        <li>
          <Link href="#5">5.1. PIELUCHY DLA NIEMOWLAKÓW</Link>
        </li>
        <li>
          <Link href="#5">5.2. PRZEKAZANIE DZIECKA POD OPIEKĘ INSTRUKTORA</Link>
        </li>
        <li>
          <Link href="#5">5.3. SPÓŹNIENIA NA ZAJĘCIA</Link>
        </li>
      </ul>
    </div>
  );
};
export default List;
