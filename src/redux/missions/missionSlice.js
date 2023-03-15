import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const state = response.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  return state;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const newState = { ...state };
      newState.missions = state.missions.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: !mission.reserved }
        : mission));
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.missions = action.payload;
      return newState;
    });
  },
});

export const { addMissions, changeStatus } = missionSlice.actions;
export default missionSlice.reducer;
