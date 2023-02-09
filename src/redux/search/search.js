import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { value: '' },
  reducers: {
    filter(state, action) {
      return { value: action.payload.value };
    },
    cleanFilter() {
      return { value: '' };
    },
  },
});

export const { filter, cleanFilter } = searchSlice.actions;
export default searchSlice.reducer;
