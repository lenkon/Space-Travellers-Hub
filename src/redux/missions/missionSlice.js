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
  },
});

export const { addMissions } = missionSlice.actions;
export default missionSlice.reducer;
