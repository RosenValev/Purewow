import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css'
import * as userApi from '../../services/userApi.js'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext.jsx'

export default function Navigation() {
    const { token, updateToken } = useAuth();

    const onLogout = async () => {
        const result = await userApi.logout();
        if (result.success) {
            updateToken()
        }
    };

    return (
        <Navbar data-bs-theme="light" className={styles.navbar} >
            <Container fluid >
                <Navbar.Brand as={Link} to="/" className={styles.logo}>PureWow</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/recipies">Recipies</Nav.Link>
                    {token ? (
                        <>
                            <Nav.Link as={Link} to="/create-recipie">Create recipie</Nav.Link>
                            <Nav.Link as={Link} to="/my-profile">My Profile</Nav.Link>
                            <Nav.Link as={Link} to="" onClick={onLogout}>Logout</Nav.Link>
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