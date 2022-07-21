import './App.css';
import { Container } from '@chakra-ui/react'

import Auth from './components/Auth'

function App() {
  return (
    <div className="App">
      <Container maxW='100%' h='100vh'>
        <Auth/>
      </Container>
    </div>
  );
}

export default App;
