import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from './logo.png'

const Header = () => {
  
    const {user} = useContext(AuthContext);
    console.log(user);
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand href="#home"><img src={Logo} width={30} height={30} alt='brand'/></Navbar.Brand>
        <Navbar.Brand href='#' className='font-semibold'>DEEP WEB SCHOOL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav>
              <Link to='/courses' className='text-decoration-none text-white'>Courses</Link>
              <Link to='/faq' className='text-decoration-none text-white mx-3'>FAQ</Link>
              <Link to='/blogs' className='text-decoration-none text-white'>Blogs</Link>
            </Nav>
            <Nav>
              <Link to='/login' className='mx-3 text-decoration-none text-white'>Log In</Link>
            </Nav>
            {/* <img src={user.photoURL} alt=''></img> */}
            {/* <p>{user.displayName}</p> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
};

export default Header;