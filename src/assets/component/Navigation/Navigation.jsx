import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
   <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-primary' href="#home">TMA</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='p-2 text-decoration-none' to="/home">Home</Link>
            <Link className='p-2 text-decoration-none' to="/gettask">GetTask</Link>
          </Nav>
        </Container>
      </Navbar>
   </div>
    );
};

export default Navigation;