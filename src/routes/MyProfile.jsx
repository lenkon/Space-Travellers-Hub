import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missionsReducer);
  const filteredMissions = missions.filter((mission) => mission.reserved);

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
        <Col />
      </Row>
    </Container>
  );
};

export default MyProfile;
