import Blogs from "../components/blogs/Blogs";
import CheckOut from "../components/CheckOut/CheckOut";
import ErrorPage from "../components/errorPages/ErrorPage";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import SingleCourse from "../components/singleCourse/SingleCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
            element: <Blogs></Blogs>
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
            loader: () => fetch('https://web-development-server-mdshakil-ctg.vercel.app/courses')
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/:id',
            element: <SingleCourse></SingleCourse>,
            loader: ({params}) =>fetch(`https://web-development-server-mdshakil-ctg.vercel.app/${params.id}`) 
         },
         {
            path:'/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) =>fetch (`https://web-development-server-mdshakil-ctg.vercel.app/${params.id}`)
         }
      ]
   },
   {
      path: '*',
      element: <ErrorPage></ErrorPage>
   }
   
]);