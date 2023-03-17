import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <Navbar expand="md" bg="light">
      <Container fluid>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <h2 className={styles.title}>Space Travelers&rsquo; Hub</h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav className={`my-3 ${styles.displayFlex}`} style={{ maxHeight: '112px' }} navbarScroll>
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
            <span>|</span>
            <NavLink to="/myProfile">My Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
