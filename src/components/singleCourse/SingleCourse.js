import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const SingleCourse = () => {
   const course = useLoaderData();
   console.log(course);
   const {course_id, image_url, name, price, ratings, students, instructor, discription} = course
   return (
      <div className='d-flex flex-col justify-center p-4 lg:m-5'>
         <img  src={image_url} alt='course'></img>
         <h2 className='mt-4'>{name}</h2>
         <p>Total Students : {students}</p>
         <p>Course Price : {price}</p>
         <p>Course Instructor : {instructor}</p>
         <p>Total Ratings : {ratings}</p>
         <p>{discription}</p>
         <Link to={`/checkout/${course_id}`}><button className='btn btn-warning'>Premium access</button></Link>
      </div>
   );
};

export default SingleCourse;