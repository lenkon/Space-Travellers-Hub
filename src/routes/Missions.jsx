import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMissions, changeStatus } from '../redux/missions/missionSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios('https://api.spacexdata.com/v3/missions');
      const state = response.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      dispatch(addMissions(state));
    })();
  }, [dispatch]);

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
