import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/others/Booking/Booking";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/others/Login/Login";
import Register from "../pages/others/Register/Register";
import Rooms from "../pages/others/Rooms/Rooms/Rooms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'booking',
        element: <Main></Main>,
        children: [
            {
                path: '/booking',
                element: <Booking></Booking>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'rooms',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            }
        ]
    }
])
export default router;