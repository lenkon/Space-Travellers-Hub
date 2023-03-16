import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
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

        {/*  bg={variant.toLowerCase()} */}
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                <Badge bg={!mission.reserved ? 'secondary' : 'success'}>
                  {!mission.reserved ? 'NOT A MEMBER' : 'Active Member'}
                </Badge>
              </td>
              <td>
                <div className="center-align">
                  <Button
                    type="button"
                    variant={!mission.reserved ? 'outline-success' : 'outline-danger'}
                    onClick={() => dispatch(changeStatus(mission.id))}
                  >
                    {!mission.reserved ? 'JOIN MISSION' : 'Leave Mission'}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Missions;
