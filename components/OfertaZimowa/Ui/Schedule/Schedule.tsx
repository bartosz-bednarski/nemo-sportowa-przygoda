'use client';
import React from 'react';
import styles from './schedule.module.scss';
import StripH2 from '@/components/Ui/Strips/StripH2/StripH2';
import ScheduleImg from '@/public/assets/winter/schedule.svg'

export interface SchedulePropsType{
  title: string;
  scheduleAbout: string;
  scheduleList: {
      title: string;
      text: string;
  }[];
}

const Schedule: React.FC<{schedule: SchedulePropsType}> = ({schedule}) => {
  return (
    <div className={styles.schedule}>
      <div className={styles.rowBox}>
        <div className={styles.content}>
          <StripH2
            type="h2"
            title={schedule.title}
            stripTextColor="white"
            stripBgColor="darkBlue"
          />

          <span className={styles.text}>
            {schedule.scheduleAbout}
          </span>
        </div>
        <img src={ScheduleImg.src} alt='houseWithTrees' className={styles.image}/>
      </div>
      <ul className={styles.list}>
        {schedule.scheduleList.map((listItem, index) => (
          <li className={styles.item} key={index}>
            <h3 className={styles.header}>
              {listItem.title}
            </h3>
            <span className={styles.about}>
              {listItem.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
