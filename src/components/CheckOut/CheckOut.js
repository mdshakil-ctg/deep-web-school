import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
   const data = useLoaderData();
   const {name} = data ;
   return (
      <div>
         <h1>this is private checkout page for: {name}</h1>
      </div>
   );
};

export default CheckOut;