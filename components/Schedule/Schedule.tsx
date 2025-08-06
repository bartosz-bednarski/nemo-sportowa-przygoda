'use client';
import React, {useEffect} from 'react';
import styles from './schedule.module.scss';

interface SchedulePropsType {
  src: string;
  width?: string;
  paddingTop?: string;
}

const Schedule = ({src, width, paddingTop}: SchedulePropsType) => {
  const tableStyles = '.activenow-table-name{font-size:0.7rem;};';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
  return (
    <div
      className={styles.schedule}
      style={{width: width, paddingTop: paddingTop}}
      id="harmonogram"
    >
      <h2>HARMONOGRAM</h2>
      <div
        className={`${tableStyles} ${'activenow-table-container'} ${
          styles['schedule__table']
        }`}
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img
            src="https://www.activenow.io/assets/ripple.gif"
            width="100px"
            alt="active now"
          />
        </div>
      </div>
    </div>
  );
};
export default Schedule;
