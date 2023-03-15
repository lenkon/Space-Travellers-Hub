import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missionsReducer);
  const filteredMissions = missions.filter((mission) => mission.reserved);

  return (
    <Container>
      <Row>
        <Col>
          {filteredMissions.map((data) => (<div key={data.id}>{data.name}</div>))}
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default MyProfile;
