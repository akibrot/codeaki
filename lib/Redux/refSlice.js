import { createSlice } from "@reduxjs/toolkit";
export const RefSlice = createSlice({
  name: "refresh",
  initialState: { refreshHandler: true },
  logout: {},
  reducers: {
    refresh: (state, action) => {
      return (state = { refreshHandler: !state.refreshHandler });
    },
  },
});
export const { refresh } = RefSlice.actions;
export default RefSlice.reducer;
