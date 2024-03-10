import './App.css';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Router from './component/Router';

function App() {
  return (
    <ChakraProvider>
      <CSSReset/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
