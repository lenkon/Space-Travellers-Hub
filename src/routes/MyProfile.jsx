import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missionsReducer);
  const filteredMissions = missions.filter((mission) => mission.reserved);
  const { rockets } = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <Container>
      <Row className="mr-y">
        <Col>
          <h3>My Missions</h3>
          <ListGroup>
            {filteredMissions.map((data) => (
              <ListGroup.Item key={data.id}>{data.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col>
          <Card border="white">
            <Card.Body>
              <h3>My Rockets</h3>
              <Card.Text>
                <ListGroup>
                  {filteredRockets.map(({
                    id,
                    name,
                  }) => (
                    <ListGroup.Item Item key={id}>
                      {name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
