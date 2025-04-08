import styles from '../page.module.scss';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import Link from 'next/link';
import {Metadata} from 'next';
import PoolsStatuesImg from '@/public/assets/statues/pools.webp';
import ColoniesStatuesImg from '@/public/assets/statues/colonies.webp';
import CampsStatuesImg from '@/public/assets/statues/camps.webp';

export const metadata: Metadata = {
  title: 'Regulamin',
};

const RegulaminPage = () => {
  return (
    <div className={styles['statues-row']}>
      <Link
        href="/assets/statues/Regulamin-baseny.pdf"
        className={styles['statues-row__row-item']}
      >
        <img
          width={600}
          height={1080}
          src={PoolsStatuesImg.src}
          alt="regulamin baseny"
        />
        <span className={styles['statues-row__row-item__sticker-box']}>
          <StickerH2
            title="REGULAMIN"
            titleStrip="BASENY"
            stripBgColor="darkBlue"
            stripTextColor="white"
          />
        </span>
      </Link>
      <Link href="/" className={styles['statues-row__row-item']}>
        <img
          width={600}
          height={1080}
          src={CampsStatuesImg.src}
          alt="regulamin obozy"
        />
        <span className={styles['statues-row__row-item__sticker-box']}>
          <StickerH2
            title="REGULAMIN"
            titleStrip="OBOZY"
            stripBgColor="basicGreen"
            stripTextColor="white"
          />
        </span>
      </Link>
      <Link href="/" className={styles['statues-row__row-item']}>
        <img
          width={600}
          height={1080}
          src={ColoniesStatuesImg.src}
          alt="regulamin polkolonie"
        />
        <span className={styles['statues-row__row-item__sticker-box']}>
          <StickerH2
            title="REGULAMIN"
            titleStrip="PÓŁKOLONIE"
            stripBgColor="basicOrange"
            stripTextColor="white"
          />
        </span>
      </Link>
    </div>
  );
};
export default RegulaminPage;
