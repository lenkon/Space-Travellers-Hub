import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'spaceTraveller/Fetch_Rockets';
const BOOK_ROCKETS = 'spaceTraveller/Book_Rockets';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => fetch('https://api.spacexdata.com/v4/rockets')
  .then((response) => response.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      type: rocket.type,
      flickrImages: rocket.flickr_images[1],
    }));

    return rockets;
  })
  .catch((error) => {
    throw new Error(error);
  }));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: { rockets: [], isloading: false, refresh: true },
  reducers: {
    bookRocket: (state, action) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets };
    },
  },

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

export const bookRocket = (id) => ({
  type: BOOK_ROCKETS,
  payload: id,
});

export default rocketSlice.reducer;
