import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const SingleCourse = () => {
   const course = useLoaderData();
   console.log(course);
   const {course_id, image_url, name, price, ratings, students, instructor, discription} = course
   return (
      <div className='d-flex flex-col justify-center p-4 lg:m-5'>

          <Pdf targetRef={ref} filename="code-details.pdf">
             {({ toPdf }) => <button className='btn btn-outline-warning w-50 mx-auto mb-4' onClick={toPdf} >Download PDF</button>}
          </Pdf>

         <div ref={ref}>
         <img  src={image_url} alt='course'></img>
         <h2 className='mt-4'>{name}</h2>
         <p>Total Students : {students}</p>
         <p>Course Price : {price}</p>
         <p>Course Instructor : {instructor}</p>
         <p>Total Ratings : {ratings}</p>
         <p>{discription}</p>
         </div>

         <Link to={`/checkout/${course_id}`}><button className='btn btn-warning'>Premium access</button></Link>
      </div>
   );
};

export default SingleCourse;