import styles from './Timer.module.scss';

const Timer = (props) => {
  const hours = String(Math.floor((props.time / 360000) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((props.time / 6000) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((props.time / 100) % 60)).padStart(2, '0');
  const milliseconds = String(props.time % 1000).padStart(3, '0');

  return (
    <div className={styles.timer}>
      <p>
        {hours}:{minutes}:{seconds}
        <span>.{milliseconds}</span>
      </p>
    </div>
  );
};

export default Timer;
