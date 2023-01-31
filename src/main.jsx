import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import NotFoundURLPage from './pages/NotFoundURLPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />,
   /*  errorElement: <NotFoundURLPage /> */
  },
  {
    path: '/signup',
    element: <SignUpPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
