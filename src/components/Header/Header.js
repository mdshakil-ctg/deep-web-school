import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from './logo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid';


const Header = () => {
  
    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogout = () =>{
      logOut()
      .then(result => console.log(result))
      .catch(err => console.error(err))
    }
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand href="#home"><img src={Logo} width={30} height={30} alt='brand'/></Navbar.Brand>
        <Navbar.Brand href='#' className='font-semibold'>DEEP WEB SCHOOL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto text-center'>
            <Nav>
              <Link to='/courses' className='text-decoration-none text-white'>Courses</Link>
              <Link to='/blogs' className='text-decoration-none text-white mx-3'>FAQ</Link>
              <Link to='/blogs' className='text-decoration-none text-white'>Blogs</Link>

              

            </Nav>
            
           <div className=''>
           {
              user?.uid ? <button className='text-white mx-4 font-semibold' onClick={handleLogout}>logout</button>: <Link to='/login' className='mx-3 text-decoration-none text-white'>Log In</Link>
            }
            
           </div>
           
          </Nav>
          <div>
            {
              user?.uid ? <img src={user.photoURL} alt=''></img>: <Link to='/blogs' className='text-decoration-none text-white'>  <UserCircleIcon className="h-6 w-6 mx-auto text-blue-500"/></Link>
            }
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
};

export default Header;