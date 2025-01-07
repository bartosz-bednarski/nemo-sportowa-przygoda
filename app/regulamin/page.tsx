import Image from 'next/image';
import styles from '../page.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import Link from 'next/link';
import {Metadata} from 'next';

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
        <Image
          width={600}
          height={1080}
          src="/assets/statues/pools.webp"
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
        <Image
          width={600}
          height={1080}
          src="/assets/statues/camps.webp"
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
        <Image
          width={600}
          height={1080}
          src="/assets/statues/colonies.webp"
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
