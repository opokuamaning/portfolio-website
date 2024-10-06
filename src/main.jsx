import { ChakraBaseProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import theme from './styles';
import router from './Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </StrictMode>,
);
