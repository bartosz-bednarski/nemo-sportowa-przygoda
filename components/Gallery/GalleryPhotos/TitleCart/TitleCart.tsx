import {COLORS} from '@/utils/UI/colors';
import styles from './titleCart.module.scss';
import Link from 'next/link';
import {GalleryItemType} from '@/utils/Gallery/Gallery';
import LogoMainBlackImg from '@/public/assets/logo/logo-main-black.svg'

interface TitleCartPropsType {
  data: GalleryItemType;
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
        <img src={LogoMainBlackImg.src} alt='logoNemo' className={styles.logoImage}/>

        <Link
          href={data.collabHref}
          style={{alignSelf: 'center', textAlign: 'center'}}
        >
          <img
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
      <img src={LogoMainBlackImg.src} alt='logoNemo' className={styles.logoImage}/>
    </div>
  );
};

export default TitleCart;
