import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './routes/Login';
import ErrorPage from './error-page';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
