import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css'

const styles = {
    navLink: {
        fontWeight: "700",
        color: "white",
        textDecoration: "none",
        letterSpacing: "2px",
        height: "60px",
    },
    navBar: {
        height: '10vh',
        textAlign: 'left',
    },
    subtitle: {
        fontStyle: 'italic',
        color: 'white',
        margin: '0'
    }
};

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={styles.navBar} id="navbar-bg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        <LinkContainer to='/'>
                            <Nav.Link id="navLink">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/AboutMe'>
                            <Nav.Link id="navLink">About Me</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/Projects'>
                            <Nav.Link id="navLink">Projects</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/ContactMe'>
                            <Nav.Link id="navLink">Contact Me</Nav.Link>
                        </LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;