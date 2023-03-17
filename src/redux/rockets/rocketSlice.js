import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'spaceTraveller/fetchRockets';
const BOOK_ROCKETS = 'spaceTraveller/bookRocket';
const CANCEL_ROCKETS = 'spaceTraveller/cancelRocket';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => fetch('https://api.spacexdata.com/v4/rockets')
  .then((response) => response.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      type: rocket.type,
      description: rocket.description,
      flickrImages: rocket.flickr_images[1],
    }));

    return rockets;
  })
  .catch((error) => {
    throw new Error(error);
  }));

const rocketSlice = createSlice({
  name: 'spaceTraveller',
  initialState: { rockets: [], loading: false, refresh: true },
  reducers: {
    bookRocket: (state, action) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets };
    },

    cancelRocket: (state, action) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return { ...state, rockets };
    },
  },

  extraReducers: {
    [fetchRockets.pending]: (state) => ({ ...state, loading: true }),
    [fetchRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      loading: false,
    }),
    [fetchRockets.rejected]: (state) => ({ ...state, loading: false }),
  },
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKETS,
  payload: id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKETS,
  payload: id,
});

export default rocketSlice.reducer;
