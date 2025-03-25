'use client';
import AttractionCard, {
  AttractionCardPropsType,
} from '../../Ui/AttractionCard/AttractionCard';
import styles from './attrractions.module.scss';

export interface AttractionsPropsType {
  title: string;
  attracions: AttractionCardPropsType[];
}

const Attractions = ({title, attracions}: AttractionsPropsType) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.rowBox}>
        {attracions.map((attraction, index) => (
          <AttractionCard {...attraction} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Attractions;
