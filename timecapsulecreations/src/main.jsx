import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/pages/About.jsx'
import Blog from './components/pages/Blog.jsx'
import Contact from './components/pages/Contact.jsx'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Submit from './components/pages/Submit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },

  {
    path: "blog",
    element: <Blog/>,
  },

  {
    path: "contact",
    element: <Contact/>,
  },

  {
    path: "submitted",
    element: <Submit/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
);
