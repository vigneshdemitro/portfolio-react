import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="primary" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className='text-primary'>VP </span>
          <span>Vigneshwar Pasupathi</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {navItems.map(({ path, label }) => (
              <Nav.Item key={path}>
                <Nav.Link as={Link} to={path} className={`${location.pathname === path ? 'text-primary active' : 'text-dark'}`} onClick={() => setExpanded(false)}>
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;