import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    addMissions: (state, action) => {
      const newState = { ...state };
      newState.missions = action.payload;
      return newState;
    },
    changeStatus: (state, action) => {
      const newState = { ...state };
      newState.missions = state.missions.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: !mission.reserved }
        : mission));
      return newState;
    },
  },
});

export const { addMissions, changeStatus } = missionSlice.actions;
export default missionSlice.reducer;
