import React from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Card, Col,
} from 'react-bootstrap';
import '../styles/Rockets.css';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className="card-list">
      {rockets.map(({
        id,
        name,
        description,
        flickrImages,
      }) => (
        <Card key={id}>
          <Col md={3} xs={12}>
            <Card.Img src={flickrImages} />
          </Col>
          <Col md={9} xs={12}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant="primary">Reserve Rocket</Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </div>
  );
}

export default Rockets;
