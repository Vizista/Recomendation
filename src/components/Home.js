import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid className="p-5 bg-light text-center">
        <h1>Discover Your Next Favorite Item</h1>
        <p>Get personalized recommendations tailored to your preferences.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="categorySelect">
                <Form.Label>Select Category</Form.Label>
                <Form.Control as="select">
                  <option>Books</option>
                  <option>Movies</option>
                  <option>Music</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="preferencesCheckboxes">
                <Form.Label>Select Preferences</Form.Label>
                <Form.Check type="checkbox" label="Action" />
                <Form.Check type="checkbox" label="Drama" />
                <Form.Check type="checkbox" label="Comedy" />
              </Form.Group>
              <Button variant="primary" type="submit">Find Recommendations</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
