import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/others/logo-white.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = ({ children }) => {
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
        <Navbar style={{ zIndex: '10' }} className='position-absolute w-100 text-white' bg="transparents" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img width="120px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {children}
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link className='ms-5 text-white' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='ms-5 text-white' as={Link} to="/booking">Destination</Nav.Link>
                        <Nav.Link className='ms-5 text-white' as={Link} to="/rooms">Details</Nav.Link>
                        <div className='ms-5'>
                            {
                                user ? <button onClick={handleLogout}>Sign out</button> : <button onClick={() => navigate('/login')}>Login</button>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;