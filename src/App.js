import './App.css';
import { Container } from '@chakra-ui/react'

// import Auth from './components/Auth'
import AppRouter from './routers';

function App() {
  return (
    <div className="App">
      <Container maxW='100%' h='100vh'>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
