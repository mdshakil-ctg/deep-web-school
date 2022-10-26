import Login from "../components/login/Login";
import Register from "../components/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Courses } = require("../components/Courses/Courses");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children:[
         {
            path: '/',
            element: <Courses></Courses>
         },
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path:'/register',
            element: <Register></Register>
         }
      ]
   },
   
]);