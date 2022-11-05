import { createSlice } from "@reduxjs/toolkit";
export const SearchKeySlice = createSlice({
  name: "search",
  initialState: { searchKey: "All Notice" },
  reducers: {
    updateKey: (state, action) => {
      return (state = { searchKey: action.payload });
    },
  },
});
export const { updateKey } = SearchKeySlice.actions;
export default SearchKeySlice.reducer;
