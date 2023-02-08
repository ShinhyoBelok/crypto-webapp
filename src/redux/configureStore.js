import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptosReducer from './crypto/crypto';

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
