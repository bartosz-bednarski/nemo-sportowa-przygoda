'use client';
import React from 'react';
import styles from './schedule.module.scss';
import ScheduleImg from '@/public/assets/winter/schedule.svg';
import StickerH2 from '@/components/Ui/Headers/Stickers/StickerH2/StickerH2';

export interface SchedulePropsType {
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
          <StickerH2
            titleStrip={schedule.title}
            title=""
            stripTextColor="white"
            stripBgColor="darkBlue"
          />

          <span className={styles.text}>{schedule.scheduleAbout}</span>
        </div>
        <img
          src={ScheduleImg.src}
          alt="houseWithTrees"
          className={styles.image}
        />
      </div>
      <ul className={styles.list}>
        {schedule.scheduleList.map((listItem, index) => (
          <li className={styles.item} key={index}>
            <h3 className={styles.header}>{listItem.title}</h3>
            <span className={styles.about}>{listItem.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
