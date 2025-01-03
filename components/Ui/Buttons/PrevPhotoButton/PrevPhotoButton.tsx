import styles from '../buttons.module.scss';

interface PrevPhotoButtonPropsType {
  onClick: () => void;
}

const PrevPhotoButton = ({onClick}: PrevPhotoButtonPropsType) => {
  return (
    <button className={styles.prevPhotoButton} onClick={onClick}>
      {' '}
      <svg
        width="218"
        height="320"
        viewBox="0 0 218 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M146.882 59.3934C150.873 65.2513 150.873 74.7487 146.882 80.6066L92.7952 160L146.882 239.393C150.873 245.251 150.873 254.749 146.882 260.607C142.891 266.464 136.421 266.464 132.431 260.607L71.118 170.607C67.1273 164.749 67.1273 155.251 71.118 149.393L132.431 59.3934C136.421 53.5355 142.891 53.5355 146.882 59.3934Z"
          fill="#FF914C"
        />
      </svg>
    </button>
  );
};

export default PrevPhotoButton;
