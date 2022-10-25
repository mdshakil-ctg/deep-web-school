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
      <div>
         <h5>All Courses For You</h5>
         {
            catagories.map(course => <li key={course.id} className='list-none'><Link  className='text-decoration-none font-bold text-green-600'>{course.name}</Link></li>)
         }
      </div>
   );
};

export default LeftNav;