import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import LeftNav from '../leftNav/LeftNav';

const Courses = () => {
   const courses = useLoaderData();
   console.log(courses)
   return (
      <div className='grid grid-cols-3'>
      <div><LeftNav ></LeftNav></div>
      <div className='col-span-2 grid grid-cols-2 gap-2'>
         {
            courses.map(course=> <CourseDetails key={course.id} course={course}></CourseDetails>)
         }
      </div>

      </div>
   );
};

export default Courses;