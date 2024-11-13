import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarList = () => (
    <>
        <Navbar sticky="top" bg="dark" expand="lg" data-bs-theme="dark" className="p-3">
            <Navbar.Brand href="#home">Practice Newsfeed App</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link>Newsfeed</Nav.Link>
                <Nav.Link>Messages</Nav.Link>
            </Nav>
        </Navbar>
    </>
);

export default NavbarList;
