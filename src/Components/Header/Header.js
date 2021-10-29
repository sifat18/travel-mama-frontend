import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../images/icons8-camping-65.png'
const Header = () => {
    return (
        <Navbar fluid collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/home'> <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt=""
                    />    </Navbar.Brand></NavLink>
                <Navbar.Brand className='fw-bold' href="#home">TRAVEL~MAMA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to='/home'>  <Nav.Link href='/home'>Features</Nav.Link></NavLink>
                        <NavLink to='/home'><Nav.Link href='/'>Pricing</Nav.Link></NavLink>

                    </Nav>
                    <Nav>
                        <NavLink to='/home'><Nav.Link href="#deets">More deets</Nav.Link></NavLink>
                        <NavLink to='/home'><Nav.Link href="#deets">More deets</Nav.Link></NavLink>
                        <NavLink to='/home'><Nav.Link href="#deets">More deets</Nav.Link></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;