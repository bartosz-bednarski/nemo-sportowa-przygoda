'use client';
import React from 'react';
import styles from './accommodation.module.scss';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';
import Image from 'next/image';
import Link from 'next/link';
import AccomodationImg from '@/public/assets/winter/surroundings.svg'

export interface AccommodationPropsType {
  about: string;
  list: string[];
  image: string;
  href: string;
}

const Accommodation: React.FC<{
  accommodation: AccommodationPropsType;
}> = ({accommodation}) => {
  return (
    <div className={styles.accommodation}>
      <div className={styles.rowBox}>
        <div className={styles.content}>
          <StripH2
            type="h2"
            title="ZAKWATEROWANIE"
            stripTextColor="white"
            stripBgColor="darkBlue"
          />
          <span className={styles.text}>{accommodation.about}</span>

          <ul className={styles.list}>
            <span className={styles.text}>Ośrodek w pigułce:</span>
            {accommodation.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Image src={AccomodationImg} alt='accomodation' className={styles.svgImage}/>
        
      </div>
      <Link className={styles.imageBox} href={accommodation.href}>
        <Image
          className={styles.image}
          src={`/assets/winter/zakwaterowanie/${accommodation.image}.webp`}
          width={1920}
          height={300}
          alt={accommodation.image}
          title={accommodation.image}
        />
        <span className={styles.button}>Sprawdź stronę ośrodka</span>
      </Link>
    </div>
  );
};
export default Accommodation;
