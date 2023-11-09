import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container fluid >
                <Navbar.Brand href="#home">PureWow</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Single recipie">Single recipie</Nav.Link>
                    <Nav.Link as={Link} to="/Recipies">Recipies</Nav.Link>
                    {/* for Guests */}
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                    {/* For Users */}
                    <Nav.Link as={Link} to="/Create-recipie">Create recipie</Nav.Link>
                    <Nav.Link as={Link} to="/My-profile">My Profile</Nav.Link>
                    <Nav.Link as={Link} to="/Logout">Logout</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
}