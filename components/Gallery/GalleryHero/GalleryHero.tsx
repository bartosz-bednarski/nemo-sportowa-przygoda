import styles from './galleryHero.module.scss';
import StripH1 from '@/components/Ui/Strips/StripH1/StripH1';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import HeroImg from '@/public/gallery/hero.webp';

const GalleryHero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.img} src={HeroImg.src} alt="gallery-hero" />
      <div className={styles.title}>
        <h1 className={styles.header}>GALERIA</h1>
        <span className={styles.strip}>
          <StripH1
            title="ZDJĘĆ"
            stripBgColor="basicOrange"
            stripTextColor="white"
          />
        </span>
      </div>
      <Scrap2 position="bottom" color="basicOrange" />
    </div>
  );
};

export default GalleryHero;
