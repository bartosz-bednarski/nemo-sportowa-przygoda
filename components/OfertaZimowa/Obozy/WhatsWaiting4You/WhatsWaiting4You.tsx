'use client';
import React from 'react';
import styles from './whatsWaiting4You.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import NemoSkierImg from '@/public/assets/customLogos/nemo-skier.svg'
import Image from 'next/image';
export interface WhatsWaiting4YouPropsType{
  list: string[];
    summary: string;
}

const WhatsWaiting4You: React.FC<{
  details: WhatsWaiting4YouPropsType;
}> = ({details}) => {

  return (
    <div className={styles.whatsWaiting4You}>
      <div className={styles.content}>
        <StickerH2
          title="CO NA CIEBIE"
          titleStrip="CZEKA?"
          titleColor="darkBlue"
          stripBgColor="darkBlue"
          stripTextColor="white"
        />
        <ul className={styles.list}>
          {details.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <span className={styles.text}>
          {details.summary}
        </span>
      </div>
      <Image src={NemoSkierImg} alt='nemo skier' className={styles.image}/>
      
    </div>
  );
};

export default WhatsWaiting4You;
