import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import Container from './components/Container/Container';

const App = () => {
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
