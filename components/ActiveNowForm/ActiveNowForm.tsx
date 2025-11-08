'use client';
import React, {useEffect, useRef} from 'react';
import styles from './activeNowForm.module.scss';

interface ActiveNowFormPropsType {
  src: string;
  width?: string;
  paddingTop?: string;
}

const ActiveNowForm = ({src}: ActiveNowFormPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [src]);
  return (
    <div className={styles.activenowFormContainer} id="harmonogram">
      <h2>Formularz zapisów</h2>
      <div
        className={`${styles.formBox} activenow-form-container activenow-form-90766-container`}
      >
        <div ref={containerRef}></div>
      </div>
    </div>
  );
};
export default ActiveNowForm;
