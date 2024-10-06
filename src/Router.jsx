import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import PhotoHome from './Pages/PhotoHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/photography',
    element: <PhotoHome />,
    errorElement: <NotFound />,
  }
]);

export default router;
