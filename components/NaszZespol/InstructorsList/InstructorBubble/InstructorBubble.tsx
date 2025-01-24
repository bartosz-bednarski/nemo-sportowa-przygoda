'use client';
import React from 'react';
import styles from './instructorBubble.module.scss';

const InstructorBubble: React.FC<{
  instructorName: string;
  img1: string;
  onClick: () => void;
}> = ({instructorName, img1, onClick}) => {
  return (
    <div onClick={() => onClick()} className={styles.insctructorBubble}>
      <div className={styles['insctructorBubble__image']}>
        <img src={`/assets/instructors/${img1}`} alt="instructor" />
      </div>
      <span className={styles['insctructorBubble__title']}>
        {instructorName}
      </span>
    </div>
  );
};
export default InstructorBubble;
