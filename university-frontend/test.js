
import App from "./src/App";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import CreateStudent from "./src/pages/admin/CreateStudent";
import CreateAdmin from "./src/pages/admin/CreateAdmin";
import CreateFaculty from "./src/pages/admin/CreateFaculty";

export const adminPaths2=[
 
    {  
        name:'Dashboard',
        path:'dashboard',
        element: '<AdminDashboard/>',
    },
    {  name:'User Management',
        children:[
            {  
                name:'Create Admin',
                path:'create-admin',
                element:'<CreateAdmin/>',
            },
            
            {  
                name:'Create Student',
                path:'create-student',
                element:'<CreateStudent/>',
            },
            {  
                name:'Create Faculty',
                path:'create-faculty',
                element:'<CreateFaculty/>',
            },
            
        ]
    },
]
const newArr = adminPaths2.reduce((acc, item) =>{

    if(item.path && item.element){
        acc.push({
           path: item.path,
           element: item.element 
        });
    }
    return  acc
}, [])
console.log(newArr);