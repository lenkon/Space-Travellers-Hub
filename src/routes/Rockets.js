import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Card, Col,
} from 'react-bootstrap';
import { bookRocket } from '../redux/rockets/rocketSlice';
import '../styles/Rockets.css';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookHandler = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <div className="card-list">
      {rockets.map(({
        id,
        name,
        type,
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
                {type}
              </Card.Text>
              <Button variant="primary" onClick={() => bookHandler(id)}>Reserve Rocket</Button>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </div>
  );
}

export default Rockets;
