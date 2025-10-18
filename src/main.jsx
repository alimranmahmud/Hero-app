import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Navbar from './Components/Navbar.jsx'
import MainLayOut from './MainLayout/MainLayOut.jsx'
import Home from './Pages/Home.jsx'
import Apps from './Pages/Apps.jsx'
import Installation from './Pages/Installation.jsx'
import router from './Routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
