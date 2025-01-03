'use client';
import React from 'react';
import styles from './instructorBubble.module.scss';
import Image from 'next/image';
import {instructorBubbleType} from '@/types/Globals/globals';
import Link from 'next/link';

const InstructorBubble: React.FC<instructorBubbleType> = ({
  scale,
  instructorName,
  img1,
  href,
}) => {
  return (
    <Link
      href={href}
      className={styles.insctructorBubble}
      style={{scale: scale}}
    >
      <div className={styles['insctructorBubble__image']}>
        <Image
          src={`/assets/instructors/${img1}`}
          fill={true}
          alt="instructor"
        />
      </div>
      <span className={styles['insctructorBubble__title']}>
        {instructorName}
      </span>
    </Link>
  );
};
export default InstructorBubble;
