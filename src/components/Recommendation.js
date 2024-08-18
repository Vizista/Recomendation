import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Recommendation = () => {
  const recommendations = [
    { id: 1, title: 'The Great Gatsby', description: 'A classic novel.', image: 'path-to-image' },
    { id: 2, title: 'Inception', description: 'A mind-bending thriller.', image: 'path-to-image' },
    // Add more recommendations here
  ];

  return (
    <Container className="mt-5">
      <Row>
        {recommendations.map(rec => (
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
        ))}
      </Row>
      <Button variant="secondary" className="mt-4">Load More</Button>
    </Container>
  );
};

export default Recommendation;
