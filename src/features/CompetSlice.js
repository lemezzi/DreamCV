import { createSlice } from '@reduxjs/toolkit';

export const CompetSlice = createSlice({
  name: "compet",
  initialState: { languages: [] },
  reducers: {
    changeLanguages: (state, action) => {
      if (action.payload && action.payload.languages) {
        state.languages = action.payload.languages;
      }
    },
  }
});

export const { changeLanguages } = CompetSlice.actions;

export const getLanguages = (state) => state.compet.languages;

export default CompetSlice.reducer;
