import HomeScreen from "./screens/HomeScreen";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    },
]);
