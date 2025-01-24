'use client';
import React from 'react';
import styles from './instructorBubble.module.scss';
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
        <img src={`/assets/instructors/${img1}`} alt="instructor" />
      </div>
      <span className={styles['insctructorBubble__title']}>
        {instructorName}
      </span>
    </Link>
  );
};
export default InstructorBubble;
