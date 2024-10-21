import { createSlice } from "@reduxjs/toolkit";

const accessTokenSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
  },
  reducers: {
    setAccessToken: (state: any, action) => {
      state.accessToken = action.payload;
      sessionStorage.setItem("access_token", action.payload);
    },
  },
});

export const { setAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
