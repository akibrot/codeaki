import { createSlice } from "@reduxjs/toolkit";
export const RefSlice = createSlice({
  name: "refresh",
  initialState: { ref: true },
  logout: {},
  reducers: {
    refresh: (state, action) => {
      return (state = { ref: !state.ref });
    },
  },
});
export const { refresh } = RefSlice.actions;
export default RefSlice.reducer;
