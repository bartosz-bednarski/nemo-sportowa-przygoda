'use client';
import {StaticImageData} from 'next/image';
import styles from './attractionCard.module.scss';

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
      <h3>{title}</h3>
      <img
        src={image.src}
        width={450}
        height={360}
        alt={title}
        title={title}
        loading="lazy"
      />
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default AttractionCard;
