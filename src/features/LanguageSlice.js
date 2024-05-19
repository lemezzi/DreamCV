import { createSlice } from '@reduxjs/toolkit';

export const LanguageSlice = createSlice({
  name: "long",
  initialState: { languages: [] },
  reducers: {
    changeLanguage: (state, action) => {
      if (action.payload && action.payload.languages) {
        state.languages = action.payload.languages;
      }
    },
  }
});

export const { changeLanguage } = LanguageSlice.actions;

export const getLangue = (state) => state.long.languages;

export default LanguageSlice.reducer;
