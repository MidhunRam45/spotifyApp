import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan: {},
  planType: false,
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlanData(state, action) {
      state.selectedPlan = action.payload;
    },
    clearPlanData(state) {
      state.selectedPlan = {};
    },
    setPlanType(state, action) {
      state.planType = action.payload;
    },
  },
});

export const { setPlanData, clearPlanData, setPlanType } = planSlice.actions;
export default planSlice.reducer;
