'use client';
import React from 'react';
import styles from './naukaPlywaniaAbout.module.scss';
import StickerH2, {
  StickerH2PropsType,
} from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';
import LinkButton from '@/components/Ui/Buttons/LinkButton';
import AboutTextPoppins, {
  AboutTextPoppinsPropsType,
} from '@/components/Ui/AboutTextPoppins/AboutTextPoppins';

export interface NaukaPływaniaAboutPropsType {
  stickerH2: StickerH2PropsType;
  aboutTextPoppins: AboutTextPoppinsPropsType;
  image: {
    src: string;
    alt: string;
  };
  button?: {
    title: string;
    href: string;
  };
}

const NaukaPlywaniaAbout = ({
  stickerH2,
  aboutTextPoppins,
  image,
  button,
}: NaukaPływaniaAboutPropsType) => {
  return (
    <div className={styles.about}>
      <div className={styles.textBox}>
        <StickerH2
          title={stickerH2.title}
          titleStrip={stickerH2.titleStrip}
          stripTextColor={stickerH2.stripTextColor}
          stripBgColor={stickerH2.stripBgColor}
          stripJustifyContent="flex-start"
        />
        <AboutTextPoppins
          titleColor={aboutTextPoppins.titleColor}
          title={aboutTextPoppins.title}
          description={aboutTextPoppins.description}
          textAlign="left"
          alignItems="flex-start"
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
      <div className={styles.imageBox}>
        <img
          className={styles.imageFill}
          src={`/assets/swimming/${image.src}`}
          alt={image.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={730}
          height={550}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NaukaPlywaniaAbout;
