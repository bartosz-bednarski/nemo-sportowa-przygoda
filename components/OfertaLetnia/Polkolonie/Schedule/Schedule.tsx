'use client';
import {StaticImageData} from 'next/image';
import styles from './schedule.module.scss';

export interface SchedulePropsType {
  day: 'PONIEDZIAŁEK' | 'WTOREK' | 'ŚRODA' | 'CZWARTEK' | 'PIĄTEK';
  title: string;
  backgroundImg: StaticImageData;
  description: string;
}

type props = {
  schedule: SchedulePropsType[];
};
const Schedule = ({schedule}: props) => {
  return (
    <div className={styles.container}>
      <h2>PLAN TYGODNIA</h2>
      <div className={styles.scheduleBox}>
        {schedule.map((item, index) => (
          <div className={styles.scheduleItem} key={index}>
            <div className={styles.headerBox}>
              <h3>{item.day}</h3>
              <span
                style={{backgroundImage: `url(${item.backgroundImg.src})`}}
                className={styles.backgroundImage}
              >
                <h4>{item.title}</h4>
              </span>
            </div>
            <span className={styles.description}>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
