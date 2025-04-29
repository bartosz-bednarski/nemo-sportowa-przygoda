'use client';
import styles from './hero.module.scss';
import StickerH1 from '@/components/Ui/Headers/Stickers/StickerH1/StickerH1';
import WiktoriaFryczekHeroImg from '@/public/assets/instructors/hero/wiktoria_fryczek.webp';
import KingaKobakaHeroImg from '@/public/assets/instructors/hero/kinga_kobaka.webp';
import AgataHojolHeroImg from '@/public/assets/instructors/hero/agata_hojol.webp';
import ZofiaGutHeroImg from '@/public/assets/instructors/hero/zofia_gut.webp';
import WeronikaMikaHeroImg from '@/public/assets/instructors/hero/weronika_mika.webp';
import {useEffect, useState} from 'react';

const HERO_DATA = [
  {img: WeronikaMikaHeroImg, name: 'WERA'},
  {img: AgataHojolHeroImg, name: 'AGATA'},
  {img: WiktoriaFryczekHeroImg, name: 'WIKA'},
  {img: KingaKobakaHeroImg, name: 'KINGA'},
  {img: ZofiaGutHeroImg, name: 'ZOSIA'},
];

const HeroTeam = () => {
  const [animationStart, setAnimationStart] = useState(false);
  const [index, setIndex] = useState(0);

  const col0 = HERO_DATA[(index - 1 + HERO_DATA.length) % HERO_DATA.length];
  const col1 = HERO_DATA[index % HERO_DATA.length];
  const col2 = HERO_DATA[(index + 1) % HERO_DATA.length];
  const col3 = HERO_DATA[(index + 2) % HERO_DATA.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_DATA.length);
      setAnimationStart(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [col1, col2, col3]);

  const columnBox1Styles = `${styles.columnBox} ${styles.column1}`;
  const columnBox2Styles = `${styles.columnBox} ${styles.column2}`;
  const columnBox3Styles = `${styles.columnBox} ${styles.column3}`;
  const imgStyles = animationStart ? styles.animation : '';

  return (
    <div className={styles.container}>
      <div className={styles.col0}>
        <img key={col0.img.src} src={col0.img.src} alt={col0.name} title={col0.name} width={650} height={1080}/>
      </div>
      <div className={columnBox1Styles}>
        <img className={imgStyles} key={col1.img.src} src={col1.img.src} alt={col1.name} title={col1.name} width={650} height={1080} />
        <span className={styles.scrapBox}>
          <span className={styles.scrapLeft}></span>
          <span className={styles.scrapText}>{col1.name}</span>
          <span className={styles.scrapRight}></span>
        </span>
      </div>
      <div className={columnBox2Styles}>
        <img className={imgStyles} key={col2.img.src} src={col2.img.src} alt={col2.name} title={col2.name} width={650} height={1080}/>
        <span className={styles.scrapBox}>
          <span className={styles.scrapLeft}></span>
          <span className={styles.scrapText}>{col2.name}</span>
          <span className={styles.scrapRight}></span>
        </span>
      </div>
      <div className={columnBox3Styles}>
        <img className={imgStyles} key={col3.img.src} src={col3.img.src} alt={col3.name} title={col3.name} width={650} height={1080}/>
        <span className={styles.scrapBox}>
          <span className={styles.scrapLeft}></span>
          <span className={styles.scrapText}>{col3.name}</span>
          <span className={styles.scrapRight}></span>
        </span>
      </div>

      <span className={styles.stickerBox}>
        <StickerH1
          title="POZNAJCIE"
          title2="NASZ"
          titleStrip="ZESPÓŁ"
          stripBgColor="basicOrange"
          stripTextColor="white"
        />
      </span>
    </div>
  );
};

export default HeroTeam;
