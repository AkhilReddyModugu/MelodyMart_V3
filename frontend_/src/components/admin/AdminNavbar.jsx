import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CustomLinkContainer from '../common/CustomLinkContainer';

const AdminNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <CustomLinkContainer to="/admin/dashboard">
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
        </CustomLinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <CustomLinkContainer to="/admin/profile">
              <Nav.Link>Profile</Nav.Link>
            </CustomLinkContainer>
            <CustomLinkContainer to="/">
              <Nav.Link>Logout</Nav.Link>
            </CustomLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
