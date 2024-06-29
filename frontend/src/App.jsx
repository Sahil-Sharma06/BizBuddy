import Navbar from "./Components/Navbar"
import { TypewriterEffectSmoothDemo } from "./Components/TypewriterEffectSmoothDemo"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Components/Login"
import Register from "./Components/Register"
import UserDashboard from "./Components/UserDashboard"
import AboutUs from "./Components/AboutUs"


const router = createBrowserRouter([
  {
    path: '/',
    element: <TypewriterEffectSmoothDemo/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <UserDashboard/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  }
])
function App() {

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
