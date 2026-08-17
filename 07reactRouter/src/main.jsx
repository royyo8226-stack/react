import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Header from './components/header/footer/header/Header/ok/header/header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Layout from './Layout'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element ={<Layout/>}>
      <Route path=''element ={<Home/>}></Route>
      <Route path='about'element={<About/>}></Route>
      <Route path='contact'element={<Element/>}></Route>

      

    
    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
  <RouterProvider router={router}/>
  </>
  </StrictMode>,
)
