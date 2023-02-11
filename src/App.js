import './App.css';
import HomePage from './HomePage/HomePage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <HomePage></HomePage>
    </ChakraProvider>
  );
}

export default App;
