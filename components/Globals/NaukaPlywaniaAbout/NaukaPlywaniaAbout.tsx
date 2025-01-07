'use client';
import React from 'react';
import styles from './naukaPlywaniaAbout.module.scss';
import StickerH2 from '@/components/Ui/Stickers/StickerH2/StickerH2';
import AboutTextPoppins from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';
import Image from 'next/image';
import {aboutType} from '@/types/NaukaPlywania/naukaPlywania';
import LinkButton from '@/components/Ui/Buttons/LinkButton';

const NaukaPlywaniaAbout: React.FC<aboutType> = ({
  stickerH2,
  aboutTextPoppins,
  image,
  button,
}) => {
  return (
    <div className={styles.about}>
      <div className={styles['about__text-box']}>
        <StickerH2
          title={stickerH2.title}
          titleStrip={stickerH2.titleStrip}
          stripTextColor={stickerH2.stripTextColor}
          stripBgColor={stickerH2.stripBgColor}
        />
        <AboutTextPoppins
          titleColor={aboutTextPoppins.titleColor}
          title={aboutTextPoppins.title}
          description={aboutTextPoppins.description}
        />
        {button !== undefined && (
          <span style={{width: 'fit-content'}}>
            <LinkButton
              title={button.title}
              href={button.href}
              bgColor={stickerH2.stripBgColor}
              textColor={stickerH2.stripTextColor}
            />
          </span>
        )}
      </div>
      <div className={styles['about__image-box']}>
        <Image
          objectFit="cover"
          objectPosition="left"
          src={`/assets/swimming/${image.src}`}
          alt={image.alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaAbout;
