import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
       
            path:'/',
            element:<LoginLayout></LoginLayout>,
            children:[
                {
                    path:'/',
                    element: <Navigate to ='/category/0'></Navigate>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'register',
                    element: <Register></Register>
                }
            ]
    },
    {
        path:'category',
        element: <Main></Main>,
        children:[
          
            {
                path:':id',
                element: <Category></Category>,
                loader:({params})=> fetch(`https://the-news-dragon-server-mehedishopnil.vercel.app/categories/${params.id}`)
            }
        ]

    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivateRout><News></News></PrivateRout>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-mehedishopnil.vercel.app/news${params.id}`)
            }
        ]
    }
])

export default router;