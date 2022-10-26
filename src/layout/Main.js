import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftNav from '../components/leftNav/LeftNav';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <div>
            
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;