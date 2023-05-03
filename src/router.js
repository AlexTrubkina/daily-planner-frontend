import HomeScreen from "./screens/HomeScreen";

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Profile from "./screens/Dashboard/Profile";
import DairyEditor from "./screens/Dashboard/DairyEditor";
import MyPlans from "./screens/Dashboard/MyPlans";

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
    },
    {
        path: "/dashboard/dairy",
        element: <DairyEditor/>
    },
    {
        path: "dashboard/my-plans",
        element: <MyPlans/>
    }
]);
