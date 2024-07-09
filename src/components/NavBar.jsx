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
        minHeight: '10vh',
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
                {/* <LinkContainer to='/'>
                    <Navbar.Brand><h2 id="main-title">Matt Lightfoot</h2><h6 style={styles.subtitle}>Front End Web Developer - 07801 963340</h6></Navbar.Brand>
                </LinkContainer> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <LinkContainer to='/'>
                            <Nav.Link id="navLink">Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/Projects'>
                            <Nav.Link id="navLink">Projects</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/MyWork'>
                            <Nav.Link id="navLink">My Work</Nav.Link>
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