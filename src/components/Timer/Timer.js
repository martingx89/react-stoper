import styles from './Timer.module.scss';

const Timer = (props) => {
  const msToHMS = (ms) => {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = parseInt(seconds / 3600);
    // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60);
    // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    const sec = Math.floor(seconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${sec
      .toString()
      .padStart(2, '0')}:${ms.toString().slice(-3).padStart(3, '0')}`;
  };

  return <div>HH:mm:ms</div>;
};

export default Timer;
