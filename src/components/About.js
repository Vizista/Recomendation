import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>About Our Recommendation System</h2>
          <p>This project uses data analysis to provide personalized recommendations based on your preferences. Built using React and Bootstrap, it aims to deliver a user-friendly experience.</p>
          <h3>How It Works</h3>
          <p>We analyze your input and use algorithms to match you with items you’ll love.</p>
          <h3>Technology Stack</h3>
          <p>React, Bootstrap, and more.</p>
          <h3>Our Vision</h3>
          <p>To make discovering new favorites easy and enjoyable.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
