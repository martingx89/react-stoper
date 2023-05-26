import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);

  const [timer, setTimer] = useState(null);

  return (
    <Container>
      <Timer time={time} />
      <Button action={''}>start</Button>
      <Button action={''}>stop</Button>
      <Button action={''}>reset</Button>
    </Container>
  );
};

export default App;
