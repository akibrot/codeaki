import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

import refSlice from "./refSlice";
import SearchKeySlice from "./searchSlice";

export default configureStore({
  reducer: {
    refresh: refSlice,
    user: userSlice,
    search: SearchKeySlice,
  },
});
