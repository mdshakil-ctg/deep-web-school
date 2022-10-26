import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

   const [catagories, setCatagories] = useState([]);

   useEffect(()=>{
      fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => setCatagories(data))
   },[])

   return (
      <div className='ms-4'>
         <h5>All Courses For You</h5>
         {
            catagories.map(course => <li key={course.id} className='list-none mb-3 hover:bg-warning rounded-lg px-1'><Link to={`/${course.id}`} className='text-decoration-none font-bold text-black'>{course.name}</Link></li>)
         }
      </div>
   );
};

export default LeftNav;