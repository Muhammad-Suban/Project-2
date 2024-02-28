import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from'./Components/Contact/Contact us.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import Signup from './Components/Signup/Signup.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', //nesting route ha isliye
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//        },{
//         path:"contact us",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

// 2nd Method 
const router =createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>} >
      
      <Route path='' element={<Home/>} />
      <Route path='Signup' element={<Signup/>} />
      <Route path='contact us' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route path='Github' element={<Github/>} />

      </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />

  </React.StrictMode>,
)
