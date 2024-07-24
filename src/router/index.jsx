import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages";
import { LayoutPublic } from "../layout/LayoutPublic";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                path: '/',
                element: <Index />,
            }
        ]
    }
])