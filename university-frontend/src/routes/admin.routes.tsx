
import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const adminPaths2=[
 
    {  
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>,
    },
    {  name:'User Management',
        children:[
            {  
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin/>,
            },
            
            {  
                name:'Create Student',
                path:'create-student',
                element:<CreateStudent/>,
            },
            {  
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty/>,
            },
            
        ]
    },
   

]

export const adminPaths=[
 
            {  
                path:'dashboard',
                element:<AdminDashboard/>,
            },
            {  
                path:'create-admin',
                element:<CreateAdmin/>,
            },
            
            {  
                path:'create-student',
                element:<CreateStudent/>,
            },
            {  
                path:'create-faculty',
                element:<CreateFaculty/>,
            },
            

]