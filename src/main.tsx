import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider  } from 'react-router-dom'
import './index.css'
import HomePage from "./pages/HomePage"
import AboutMe from './pages/AboutMe'
import Header from './components/Header'
import Footer from './components/Footer'

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,

  },
  {
    path: "/aboutme",
    element: <AboutMe/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)
