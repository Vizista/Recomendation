import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('Books');
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setPreferences(prev => {
      if (prev.includes(value)) {
        return prev.filter(pref => pref !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/recommendations', { state: { category, preferences } });
  };

  return (
    <>
      <Container fluid className="p-5 hero-section">
  <div className="overlay">
    <h1>Discover Your Next Favorite Item</h1>
    <p>Get personalized recommendations tailored to your preferences.</p>
    <Button variant="primary" size="lg">Get Started</Button>
  </div>
</Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="categorySelect">
                <Form.Label>Select Category</Form.Label>
                <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Books</option>
                  <option>Movies</option>
                  <option>Music</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="preferencesCheckboxes">
                <Form.Label>Select Preferences</Form.Label>
                <Form.Check type="checkbox" label="Action" value="Action" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Drama" value="Drama" onChange={handleCheckboxChange} />
                <Form.Check type="checkbox" label="Comedy" value="Comedy" onChange={handleCheckboxChange} />
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