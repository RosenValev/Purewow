import { Link } from 'react-router-dom'
import { useContext } from "react";

import styles from './Navbar.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../../contexts/authContext.jsx';

export default function Navigation() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <Navbar data-bs-theme="light" className={styles.navbar} >
            <Container fluid >
                <Navbar.Brand as={Link} to="/" className={styles.logo}>PureWow</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/recipies">Recipies</Nav.Link>
                    {isAuthenticated ? (
                        <>
                            <Nav.Link as={Link} to="/create-recipie">Create recipie</Nav.Link>
                            <Nav.Link as={Link} to="/my-profile">{`${username}'s profile`}</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar >
    )
};