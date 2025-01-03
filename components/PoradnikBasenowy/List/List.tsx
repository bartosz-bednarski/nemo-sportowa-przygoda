'use client';
import React from 'react';
import styles from './list.module.scss';
import Link from 'next/link';

const List: React.FC = () => {
  return (
    <div className={styles.list}>
      <ul>
        <li className={styles['list__header']}>
          <Link href="#1">1. ZAPISY NA ZAJĘCIA</Link>
        </li>
        <li>
          <Link href="#1">1.1. Wybór rodzaju zajęć</Link>
        </li>
        <li>
          <Link href="#1">1.2. Rezerwacja miejsca</Link>
        </li>
        <li>
          <Link href="#1">1.3. Potwierdzenie rezerwacji</Link>
        </li>
        <li>
          <Link href="#1">1.4. Pierwsza lekcja próbna</Link>
        </li>
        <li>
          <Link href="#1">1.5. Opłata za kurs</Link>
        </li>
        <li className={styles['list__header']}>
          <Link href="#2">2. CENNIK I OPŁATY</Link>
        </li>
        <li>
          <Link href="#2">2.1. CENNIK</Link>
        </li>
        <li>
          <Link href="#2">2.2. JAK DOKONAĆ PŁATNOŚCI?</Link>
        </li>
        <li>
          <Link href="#2">2.3. OPŁATY ZA KURSY GRUPOWE</Link>
        </li>
        <li>
          <Link href="#2">2.4. OPŁATY ZA KURSY INDYWIDUALNE</Link>
        </li>
        <li>
          <Link href="#2">2.5. PŁATNOŚCI RATALNE</Link>
        </li>
        <li className={styles['list__header']}>
          <Link href="#3">3. ODRABIANIE ZAJĘĆ</Link>
        </li>
        <li>
          <Link href="#3">3.1. ZGŁASZANIE NIEOBECNOŚCI</Link>
        </li>
        <li>
          <Link href="#3">3.2. WARUNKI ZGŁASZANIA NIEOBECNOŚCI</Link>
        </li>
        <li>
          <Link href="#3">3.3. FORMA ODRABIANIA ZAJĘĆ</Link>
        </li>
        <li>
          <Link href="#3">3.4. REZERWACJA TERMINU ODRABIANIA</Link>
        </li>
        <li>
          <Link href="#3">3.5. ODRABIANIE KURSY GRUPOWE</Link>
        </li>
        <li>
          <Link href="#3">3.6. ODRABIANIE KURSY INDYWIDUALNE I DWUOSOBOWE</Link>
        </li>
        <li className={styles['list__header']}>
          <Link href="#4">4. ZA CO ODPOWIADA INSTRUKTOR?</Link>
        </li>
        <li>
          <Link href="#4">4.1 ODPOWIEDZIALNOŚĆ INSTRUKTORA</Link>
        </li>
        <li>
          <Link href="#4">4.2 OBOWIĄZKI UCZESTNIKÓW KURSU</Link>
        </li>
        <li>
          <Link href="#4">4.3 ZGŁASZANIE ZDARZEŃ</Link>
        </li>
        <li className={styles['list__header']}>
          <Link href="#5">5. CO ZABRAĆ NA BASEN? </Link>
        </li>
        <li className={styles['list__header']}>
          <Link href="#6">6. ZGODA NA PUBLIKACJĘ WIZERUNKU</Link>
        </li>
        <li>
          <Link href="#6">6.1. ZGODA NA PUBLIKACJĘ</Link>
        </li>
        <li>
          <Link href="#6">6.2. BRAK ZGODY NA PUBLIKACJĘ</Link>
        </li>
      </ul>
    </div>
  );
};
export default List;
