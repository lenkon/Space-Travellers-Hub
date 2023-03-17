import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './missions/missionSlice';
import rockets from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets,
    missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
