import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MasterLayout from './components/MasterLayout/MasterLayout'



function App() {
  const [count, setCount] = useState(0)
  let routes = createBrowserRouter([
    {path:'/', element:<MasterLayout/>, children:[
        {index:true, element:<Home/>},
        {path:'home', element:<Home/>},
        {path:'about', element:<About/>},
        {path:'skills', element:<Skills/>},
        {path:'experience', element:<Experience/>},
        {path:'work', element:<Work/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
