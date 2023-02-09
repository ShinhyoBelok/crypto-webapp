import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { value: '' },
  reducers: {
    filter(state, action) {
      return { value: action.payload.value };
    },
  },
});

export const { filter } = searchSlice.actions;
export default searchSlice.reducer;
