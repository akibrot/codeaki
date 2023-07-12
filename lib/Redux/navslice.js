import { createSlice } from "@reduxjs/toolkit";
export const NavSlice = createSlice({
  name: "navcolor",
  initialState: { changebgtoblack: false },
  reducers: {
    changebgtoblack: (state, action) => {
      return (state = { changebgtoblack: true });
    },
    changebgtotransparent: (state, action) => {
      return (state = { changebgtoblack: false });
    },
  },
});
export const { changebgtoblack, changebgtotransparent } = NavSlice.actions;
export default NavSlice.reducer;
