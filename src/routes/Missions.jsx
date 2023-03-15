import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../redux/missions/missionSlice';

function Missions() {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missionsReducer);
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>g</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{!mission.reserved ? 'NOT A MEMBER' : 'Active Member'}</td>
              <td><div className="center-align"><button type="button" onClick={() => dispatch(changeStatus(mission.id))}>{!mission.reserved ? 'JOIN MISSION' : 'Leave Mission'}</button></div></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Missions;
