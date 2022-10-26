import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const SingleCourse = () => {
   const course = useLoaderData();
   console.log(course);
   const {course_id, image_url, name, price, ratings, students, instructor, discription} = course
   return (
      <div className='d-flex flex-col justify-center px-20'>
         <img  src={image_url} alt='course'></img>
         <h2>{name}</h2>
         <p>{students}</p>
         <p>{price}</p>
         <p>{instructor}</p>
         <p>{ratings}</p>
         <p>{discription}</p>
         <Link to={`/checkout/${course_id}`}><button>Premium access</button></Link>
      </div>
   );
};

export default SingleCourse;