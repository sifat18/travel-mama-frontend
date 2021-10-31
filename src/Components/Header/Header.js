import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../images/icons8-camping-65.png'
import useAuth from '../Context/useAuth';
const Header = () => {
    // getting user data
    const { user, isLoading, logOut } = useAuth()
    // show spinner if until user data found
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Navbar sticky="top" fluid collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    <Nav variant="pills" className="ms-auto">
                        <NavLink to='/home'>  <Nav.Link href='/home'>Home</Nav.Link></NavLink>
                        {user.displayName && <NavLink to='/allOrders'><Nav.Link href='/allOrders'>All Reservations</Nav.Link></NavLink>}
                        {user.displayName && <NavLink to='/newSite'><Nav.Link href='/newSite'>Add Site</Nav.Link></NavLink>}
                        {user.displayName && <NavLink to='/myOrder'><Nav.Link href='/myOrder '>MyReservations</Nav.Link></NavLink>}
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
        </Navbar >
    );
};

export default Header;