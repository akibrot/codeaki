import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: { color: false },
  logout: {},
  reducers: {
    colorOff: (state, action) => {
      return (state = { color: false });
    },
    colorOn: (state) => {
      return (state = { color: true });
    },
  },
});
export const { colorOff, colorOn, textColorOff, textColorOn } =
  userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// export const userSlice = createSlice({
//   name: "user",
//   initialState: { color: false },
//   logout: {},
//   reducers: {
//     login: (state, action) => {
//       return (state = { ...action.payload });
//     },
//     logout: (state) => {
//       return (state = {});
//     },
//   },
// });
// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
