import {COLORS} from '@/utils/UI/colors';
import styles from './titleCart.module.scss';
import {galleryItemType} from '@/types/Gallery/gallery';
import LogoMainBlack from '@/components/Globals/Logo/LogoMainBlack';
import Link from 'next/link';
import Image from 'next/image';

interface TitleCartPropsType {
  data: galleryItemType;
}

const TitleCart = ({data}: TitleCartPropsType) => {
  if (data.collab && data.collabHref !== '') {
    return (
      <div
        className={styles.titleCart}
        style={{background: COLORS[data.stripColor]}}
      >
        <h1
          className={styles.header}
          style={{color: COLORS[data.stripTextColor]}}
        >
          {data.title}
        </h1>
        <LogoMainBlack width="80%" height="auto" />

        <Link
          href={data.collabHref}
          style={{alignSelf: 'center', textAlign: 'center'}}
        >
          <Image
            src={`/gallery/collab/${data.collabLogo}`}
            style={{width: '80%', height: 'auto'}}
            width="190"
            height="152"
            alt={data.collabLogo}
          />
        </Link>
      </div>
    );
  }
  return (
    <div
      className={styles.titleCart}
      style={{background: COLORS[data.stripColor]}}
    >
      <h1
        className={styles.header}
        style={{color: COLORS[data.stripTextColor]}}
      >
        {data.title}
      </h1>
      <LogoMainBlack width="80%" height="auto" />
    </div>
  );
};

export default TitleCart;
