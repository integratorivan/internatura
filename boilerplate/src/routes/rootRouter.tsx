import { createBrowserRouter } from 'react-router-dom';
import Main from './main';
import { ErrorPage } from './error';
import { Login } from './login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
