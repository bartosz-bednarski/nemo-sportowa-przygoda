'use client';
import React from 'react';
import styles from './instructorBubble.module.scss';
import {StaticImageData} from 'next/image';

interface InstructorBubblePropsType {
  name: string;
  img: StaticImageData;
  onClick: () => void;
}

const InstructorBubble = ({name, img, onClick}: InstructorBubblePropsType) => {
  return (
    <div onClick={() => onClick()} className={styles.insctructorBubble}>
      <div className={styles.image}>
        <img src={img.src} alt="instructor" />
      </div>
      <span className={styles.title}>{name}</span>
    </div>
  );
};
export default InstructorBubble;
