import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Events from './components/Events/Events.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Teams from './components/Teams/Teams.jsx'
import JoinUs from './components/JoinUs/JoinUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='events' element={<Events />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='teams' element={<Teams />} />
      <Route path='join-us' element={<JoinUs />} />
    </Route>,
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
