import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../images/icons8-camping-65.png'
import useAuth from '../Context/useAuth';
const Header = () => {
    const { user, isLoading, logOut } = useAuth()
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
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
                        <NavLink to='/home'>  <Nav.Link href='/home'>Home</Nav.Link></NavLink>
                        <NavLink to='/allOrders'><Nav.Link href='/home'>All orders</Nav.Link></NavLink>
                        <NavLink to='/newSite'><Nav.Link href='/home'>Add Site</Nav.Link></NavLink>
                        <NavLink to='/myOrder'><Nav.Link href='/home '>MyReservations</Nav.Link></NavLink>

                    </Nav>
                    <Nav>
                        {user.displayName && <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                        {user.displayName && <Nav.Link onClick={logOut}>LogOut</Nav.Link>
                        }
                        {!user.displayName && <NavLink to='/register'><Nav.Link href="#register">Register</Nav.Link></NavLink>
                        }
                        {!user.displayName && <NavLink to='/login'><Nav.Link href="#login">Login</Nav.Link></NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;