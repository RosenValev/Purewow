import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

export default function Navigation() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])

    useEffect(() => {
        // Logic to execute when token changes (if needed)
        console.log('Token changed:', token);
    }, [token]); // Will run whenever 'token' changes

    if (token) {
        return (
            <Navbar data-bs-theme="light" className={styles.navbar} >
                <Container fluid >
                    <Navbar.Brand as={Link} to="/" className={styles.logo}>PureWow</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/recipies">Recipies</Nav.Link>
                        {/* For Users */}
                        <Nav.Link as={Link} to="/create-recipie">Create recipie</Nav.Link>
                        <Nav.Link as={Link} to="/my-profile">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>

                    </Nav>
                </Container>
            </Navbar >
        )
    }

    return (
        <Navbar data-bs-theme="light" className={styles.navbar} >
            <Container fluid >
                <Navbar.Brand as={Link} to="/" className={styles.logo}>PureWow</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/recipies">Recipies</Nav.Link>

                    {/* for Guests */}
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
};