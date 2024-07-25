import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages";
import { LayoutPublic } from "../layout/LayoutPublic";
import getAllProducts from "../API/loaderProducts";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                path: '/',
                element: <Index />,
                loader: getAllProducts
            }
        ]
    }
])