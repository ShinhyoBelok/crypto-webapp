import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missionsStore: missionsReducer,
    rocket: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
