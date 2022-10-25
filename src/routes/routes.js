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
         }
      ]
   }
]);