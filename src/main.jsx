import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import PlayQuizPage from './pages/PlayQuizPage';
import CreateQuizPage from './pages/CreateQuizPage';
import NotFoundURLPage from './pages/NotFoundURLPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
   /*  errorElement: <NotFoundURLPage /> */
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  },
  {
    path: '/playQuiz',
    element: <PlayQuizPage />
  },
  {
    path: '/createQuiz',
    element: <CreateQuizPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)


/*   */