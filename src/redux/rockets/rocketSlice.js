import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'spaceTraveller/Fetch_Rockets';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => fetch('https://api.spacexdata.com/v4/rockets')
  .then((response) => response.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images[1],
    }));

    return rockets;
  })
  .catch((error) => {
    throw new Error(error);
  }));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [], loading: false, refresh: true },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, isloading: true }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      isloading: false,
    }),
    [fetchRockets.rejected]: (state) => ({ ...state, isloading: false }),
  },
});

export default rocketSlice.reducer;
