import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarList = () => (
    <>
        <Navbar sticky="top" bg="dark" expand="lg" data-bs-theme="dark" className="w-100">
            <Navbar.Brand href="#home">Practice Newsfeed App</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link className="me-5" href="#home">Home</Nav.Link>
                <Nav.Link className="me-5" href="#features">Newsfeed</Nav.Link>
                <Nav.Link className="me-5" href="#pricing">Messages</Nav.Link>
            </Nav>
        </Navbar>
    </>
);

export default NavbarList;
