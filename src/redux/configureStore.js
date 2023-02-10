import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptosReducer from './crypto/crypto';
import searchReducer from './search/search';

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
