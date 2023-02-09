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
  initialState: [],
  reducers: {
    cryptoShowDetail(state, action) {
      const { id } = action.payload;
      const crypto = state.filter((crypto) => crypto.id === id);
      const index = state.map((crypto) => crypto.id).indexOf(id);
      return [
        ...state.slice(0, index),
        { ...crypto[0], displayDetail: true },
        ...state.slice(index + 1),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCrypto.fulfilled, (state, action) => (
        action.payload.data
      ));
  },
});

export const { cryptoShowDetail } = cryptosSlice.actions;
export default cryptosSlice.reducer;
