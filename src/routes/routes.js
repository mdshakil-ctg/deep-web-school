import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import SingleCourse from "../components/singleCourse/SingleCourse";
import Courses from './../components/Courses/Courses';

const { createBrowserRouter } = require("react-router-dom");

const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children:[
         {
            path: '/',
            element: <Login></Login>
         },
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path:'/register',
            element: <Register></Register>
         },
         {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch('http://localhost:5000/courses')
         },
         {
            path: '/:id',
            element: <SingleCourse></SingleCourse>,
            loader: ({params}) =>fetch(`http://localhost:5000/${params.id}`) 
         }
      ]
   },
   
]);