'use client';
import {StaticImageData} from 'next/image';
import styles from './attractionCard.module.scss';
import image from '@/public/gallery/naukaplywaniadzieciimlodziez/portraits/03.webp';

export interface AttractionCardPropsType {
  title: string;
  image: StaticImageData;
  description: string;
}

const AttractionCard = ({
  title,
  image,
  description,
}: AttractionCardPropsType) => {
  return (
    <div className={styles.container}>
      <h3>ZAJĘCIA NA BASENIE</h3>
      <img src={image.src} />
      <span className={styles.description}>
        Doskonalenie technik pływackich i zabawy wodne
      </span>
    </div>
  );
};

export default AttractionCard;
