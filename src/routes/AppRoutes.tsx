import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.tsx";
import PublicLayout from "../layout/PublicLayout.tsx";
import Home from "../pages/Home.tsx";
import NotFound from "../pages/NotFound.tsx";
import AuthLayout from "../layout/AuthLayout.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import Test from "../pages/Test.tsx";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            path: "/",
            element: <PublicLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout/>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login/>
                },
                {
                    path: "/auth/signup",
                    element: <Signup/>
                }
            ]
        },
        {
            path: "/test",
            element: <Test/>
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ]
}]);

export default router;