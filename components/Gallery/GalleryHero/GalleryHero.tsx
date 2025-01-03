import Image from 'next/image';
import styles from './galleryHero.module.scss';
import StripH1 from '@/components/Ui/StripH1/StripH1';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';

const GalleryHero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/gallery/hero.webp"
        fill={true}
        alt="gallery-hero"
        objectFit="cover"
      />
      <div className={styles.title}>
        <h1 className={styles.header}>GALERIA</h1>
        <span className={styles.strip}>
          <StripH1
            type="h1"
            title="ZDJĘĆ"
            stripBgColor="basicOrange"
            stripTextColor="white"
            scale={1.4}
          />
        </span>
      </div>
      <Scrap2 position="bottom" color="basicOrange" />
    </div>
  );
};

export default GalleryHero;
