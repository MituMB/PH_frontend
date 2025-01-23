import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
// import { Users } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    { 
        path:'/', 
        element:<App/>,
        children: [
           { 
            // path:'tasks',
            index:true,
            element:<Tasks/>,
            },
            { 
            path:'users',
            element:<Users/>,
            },
        ]
    },
    { 
        path:'/login',
        element:<App/>,
    }
])

export default routes