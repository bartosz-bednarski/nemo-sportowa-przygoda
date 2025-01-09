'use client';
import React from 'react';
import styles from './instructors.module.scss';
import StripH3 from '@/components/Ui/StripH3/StripH3';
import InstructorBubble from '@/components/Globals/InstructorBubble/InstructorBubble';
import BackgroundText from '@/components/Ui/BackgroundText/BackgroundText';
import {instructorsType} from '@/types/NaukaPlywania/naukaPlywania';

const Instructors: React.FC<instructorsType> = ({
  backgroundText,
  stripH3,
  instructors,
}) => {
  return (
    <div className={styles.instructors}>
      <BackgroundText title={backgroundText} />
      <StripH3
        title={stripH3.title}
        scale={stripH3.scale}
        stripBgColor={stripH3.stripBgColor}
        stripTextColor={stripH3.stripTextColor}
        marginBottom={stripH3.marginBottom}
      />
      <div className={styles['instructors__row-box']}>
        {instructors.map((instructor) => (
          <InstructorBubble
            key={instructor.instructorName}
            instructorName={instructor.instructorName}
            scale={instructor.scale}
            img1={instructor.img1}
            img2={instructor.img2}
            href={instructor.href}
          />
        ))}
      </div>
    </div>
  );
};
export default Instructors;
