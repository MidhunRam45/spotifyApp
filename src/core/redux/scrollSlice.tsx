import { createSlice } from "@reduxjs/toolkit";

const initialState = "home";

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setActiveLink: (state, action) => action.payload,
  },
});

export const { setActiveLink } = scrollSlice.actions;
export default scrollSlice.reducer;
