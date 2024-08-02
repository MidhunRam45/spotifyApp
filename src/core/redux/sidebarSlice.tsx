import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miniSidebar: false,
  mobileSidebar: false,
  expandMenu: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setMiniSidebar: (state, action) => {
      state.miniSidebar = action.payload;
    },
    setMobileSidebar: (state, action) => {
      state.mobileSidebar = action.payload;
    },
    setExpandMenu: (state, { payload }) => {
      state.expandMenu = payload;
    },
  },
});

export const { setMiniSidebar, setMobileSidebar, setExpandMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
