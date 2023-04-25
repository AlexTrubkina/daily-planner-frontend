import HomeScreen from "./screens/HomeScreen";

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./screens/Auth/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    },
    {
        path: "/signin",
        element: <SignIn/>
    }
]);
