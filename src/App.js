import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);

  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <Container>
      <Timer time={time} />
      <Button action={start}>start</Button>
      <Button action={stop}>stop</Button>
      <Button action={reset}>reset</Button>
    </Container>
  );
};

export default App;
