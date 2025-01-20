'use client';
import React from 'react';
import styles from './mountainsTrees.module.scss';
import MountainsTreesImg from '@/public/assets/winter/mountainsTrees.svg'

const MountainsTrees: React.FC = () => {
  return (
    <div className={styles.mountainsTrees}>
     <img src={MountainsTreesImg.src} alt='mountainsAndTrees'/>
    </div>
  );
};

export default MountainsTrees;
