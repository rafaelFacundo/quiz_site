import React from 'react'
import ReactDOM from 'react-dom/client'

import LoginSignUpPage from './pages/LoginSignUpPage'
import NotFoundURLPage from './pages/NotFoundURLPage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginSignUpPage />,
    errorElement: <NotFoundURLPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
