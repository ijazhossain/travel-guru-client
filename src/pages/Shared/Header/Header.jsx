import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/others/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <Navbar bg="white" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img width="120px" src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/booking">Catagories</Nav.Link>
                    <Nav.Link as={Link} to="/rooms">Details</Nav.Link>
                    {
                        user ? <button onClick={handleLogout}>Sign out</button> : <button onClick={() => navigate('/login')}>Login</button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;