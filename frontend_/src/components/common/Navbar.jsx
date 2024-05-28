import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CustomLinkContainer from './CustomLinkContainer';

const CustomNavbar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <CustomLinkContainer to="/">
          <Navbar.Brand>MelodyMart</Navbar.Brand>
        </CustomLinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <CustomLinkContainer to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </CustomLinkContainer>
            <CustomLinkContainer to="/signup">
              <Nav.Link as="span">SignUp</Nav.Link>
            </CustomLinkContainer>
            <CustomLinkContainer to="/login">
              <Nav.Link as="span">Login</Nav.Link>
            </CustomLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
