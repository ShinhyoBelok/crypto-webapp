import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',
  async () => {
    const cryptoLive = await fetch('https://api.coincap.io/v2/assets', {
      method: 'GET',
    });
    const responseLive = cryptoLive.json();
    return responseLive;
  },
);

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCrypto.fulfilled, (state, action) => action.payload.data);
  },
});

export default cryptosSlice.reducer;
