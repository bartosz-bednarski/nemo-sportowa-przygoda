'use client';
import 'react';
import styles from './campsSection.module.scss';
import SummerOffert from './SummerOffert';
import WinterOffert from './WinterOffert';

const CampsSection: React.FC = () => {
  return (
    <section className={styles.containerCol}>
      <SummerOffert />
      <WinterOffert />
    </section>
  );
};

export default CampsSection;
