import {createBrowserRouter} from 'react-router'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Landing/>
    },
    {
        path : '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/home',
        element: <Home/>
    }
  
])