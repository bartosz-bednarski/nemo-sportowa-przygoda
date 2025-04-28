'use client';
import LinkSwimmingPoolCover from '@/components/Ui/Links/LinkSwimmingPoolCover/LinkSwimmingPoolCover';
import styles from './locations.module.scss';
import KorzennaCoverImg from '@/public/assets/swimming/pools/korzenna.webp';
import GorliceCoverImg from '@/public/assets/swimming/pools/gorlice.webp';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

const Locations = () => {
  return (
    <div className={styles.container}>
      <StickerH2
        title=""
        titleStrip="LOKALIZACJE"
        stripBgColor="white"
        stripTextColor="lightBlue"
      />
      <div className={styles.rowBox}>
        <LinkSwimmingPoolCover
          image={KorzennaCoverImg}
          title="BASEN KORZENNA"
          url="/naukaplywania/korzenna"
        />
        <LinkSwimmingPoolCover
          image={GorliceCoverImg}
          title="BASEN GORLICE"
          url="/naukaplywania/gorlice"
        />
      </div>
    </div>
  );
};

export default Locations;
