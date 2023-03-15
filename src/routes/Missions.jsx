import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMissions } from '../redux/missions/missionSlice';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios('https://api.spacexdata.com/v3/missions');
      const state = response.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      dispatch(addMissions(state));
    })();
  }, [dispatch]);

  const { missions } = useSelector((state) => state.missionsReducer);

  return (
    <>
      {missions.map((mission) => (
        <div key={mission.id}>
          <h3>{mission.name}</h3>
          <p>{mission.description}</p>
        </div>
      ))}
    </>
  );
}

export default Missions;
