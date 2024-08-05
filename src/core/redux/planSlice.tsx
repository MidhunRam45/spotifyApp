import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  planId: 'test',
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlanId(state, action) {
      state.planId = action.payload;
    },
    clearPlanId(state) {
      state.planId = null;
    },
  },
});

export const { setPlanId, clearPlanId } = planSlice.actions;
export default planSlice.reducer;
