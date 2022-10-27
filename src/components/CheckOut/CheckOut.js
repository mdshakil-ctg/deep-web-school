import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
   const data = useLoaderData();
   const {name} = data ;
   return (
      <div className='p-5 vh-100'>
         <h1>This is private checkout page for: {name}</h1>
      </div>
   );
};

export default CheckOut;