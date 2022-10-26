import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftNav from '../components/leftNav/LeftNav';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <div className='grid grid-cols-3 gap-4'>
         <div><LeftNav></LeftNav></div>
         <div className='col-span-2'>home content</div>
         </div>
         {/* <Footer></Footer> */}
      </div>
   );
};

export default Main;