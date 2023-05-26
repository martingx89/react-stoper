import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState(0);

  const [interval, setInterval] = useState(null);

  return (
    <Container>
      <Timer />
      <Button>start</Button>
      <Button>stop</Button>
      <Button>reset</Button>
    </Container>
  );
};

export default App;
