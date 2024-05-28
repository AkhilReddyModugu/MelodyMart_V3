import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Item from './Item';

const Home = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to MelodyMart</h1>
          <p className="lead">
            Your one-stop shop for all musical instruments and accessories.
          </p>
          <Button variant="primary" onClick={handleSignUp} className="me-2">Sign Up</Button>
          <Button variant="secondary" onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
