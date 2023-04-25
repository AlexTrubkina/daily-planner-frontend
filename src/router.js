import HomeScreen from "./screens/HomeScreen";

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Profile from "./screens/Dashboard/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/dashboard",
        element: <Profile/>
    }
]);
