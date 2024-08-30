import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/about.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
 


const router = createBrowserRouter ([
  {
       path: '/',
       element:<Layout/>,
       Children: [
        {
       path : "",
       element: <Home/>
       },
       {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
       ]
  }]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
