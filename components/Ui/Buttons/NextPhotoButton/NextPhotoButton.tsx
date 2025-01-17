import styles from '../buttons.module.scss';

interface NextPhotoButtonPropsType {
  onClick: () => void;
}

const NextPhotoButton = ({onClick}: NextPhotoButtonPropsType) => {
  return (
    <button className={styles.nextPhotoButton} onClick={onClick}>
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
          d="M71.118 260.607C67.1273 254.749 67.1273 245.251 71.118 239.393L125.205 160L71.118 80.6066C67.1273 74.7487 67.1273 65.2513 71.118 59.3934C75.1087 53.5355 81.5788 53.5355 85.5695 59.3934L146.882 149.393C150.873 155.251 150.873 164.749 146.882 170.607L85.5695 260.607C81.5788 266.464 75.1087 266.464 71.118 260.607Z"
          fill="#FF914C"
        />
      </svg>
    </button>
  );
};

export default NextPhotoButton;
