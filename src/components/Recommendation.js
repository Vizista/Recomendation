import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Card.css';

const Recommendation = () => {
  const location = useLocation();
  const { category, preferences } = location.state || {};

  const getRecommendations = () => {
    // Mock data based on preferences
    const allRecommendations = [
      { id: 1, title: 'The Great Gatsby', description: 'A classic novel.', image: 'path-to-image', type: 'Books', tags: ['Drama'] },
      { id: 2, title: 'Inception', description: 'A mind-bending thriller.', image: 'path-to-image', type: 'Movies', tags: ['Action', 'Drama'] },
      { id: 3, title: 'Bohemian Rhapsody', description: 'A musical journey.', image: 'path-to-image', type: 'Music', tags: ['Drama', 'Music'] },
      // More data will be added later
    ];

    return allRecommendations.filter(rec => rec.type === category && rec.tags.some(tag => preferences.includes(tag)));
  };

  const recommendations = getRecommendations();

  return (
    <Container className="mt-5">
      <h2>Your {category} Recommendations</h2>
      <Row>
        {recommendations.length > 0 ? recommendations.map(rec => (
          <Col md={4} key={rec.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={rec.image} />
              <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Card.Text>{rec.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <p>No recommendations found. Please try different preferences.</p>
        )}
      </Row>
    </Container>
  );
};

export default Recommendation;