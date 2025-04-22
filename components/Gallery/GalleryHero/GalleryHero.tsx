import StickerH1 from '@/components/Ui/Headers/Stickers/StickerH1/StickerH1';
import styles from './galleryHero.module.scss';
import Scrap2 from '@/components/Ui/Scrap/Scrap2';
import HeroImg from '@/public/gallery/hero.webp';

const GalleryHero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.img} src={HeroImg.src} alt="gallery-hero" />
      <div className={styles.title}>
        <StickerH1
          titleStrip="ZDJĘĆ"
          title="GALERIA"
          title2=""
          stripBgColor="basicOrange"
          stripTextColor="white"
        />
      </div>
      <Scrap2 position="bottom" color="basicOrange" />
    </div>
  );
};

export default GalleryHero;
