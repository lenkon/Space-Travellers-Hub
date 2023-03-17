import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Card, Col, Badge,
} from 'react-bootstrap';
import { bookRocket, cancelRocket } from '../redux/rockets/rocketSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookHandler = (id, reserved) => {
    if (reserved) {
      return dispatch(cancelRocket(id));
    }
    return dispatch(bookRocket(id));
  };

  return (
    <div className="card-list">
      {rockets.map(({
        id,
        name,
        type,
        flickrImages,
        description,
        reserved,
      }) => (
        <Card key={id}>
          <Col md={3} xs={12}>
            <Card.Img src={flickrImages} />
          </Col>
          <Col md={9} xs={12}>
            <Card.Body style={{ padding: '16px' }} className="rocket-container">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {type}
              </Card.Text>
              <Card.Text>
                {reserved && (
                  <Badge bg="info">Reserved</Badge>
                )}
                {description}
              </Card.Text>
              <Button
                variant={reserved ? 'outline-secondary' : 'primary'}
                onClick={() => bookHandler(id, reserved)}
              >
                { reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </div>
  );
};

export default Rockets;
