import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  dashboardForDetails: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setDashboardForDetails: (state, { payload }) => {
      state.dashboardForDetails = payload;
    },
  },
});

export const { setLoading, setDashboardForDetails } = dashboardSlice.actions;
