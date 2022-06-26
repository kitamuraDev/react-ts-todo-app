import { StrictMode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import theme from 'theme';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer position='top-center' autoClose={3000} limit={5} />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
);
