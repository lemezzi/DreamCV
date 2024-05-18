import { createSlice } from '@reduxjs/toolkit';

export const ProfSlice = createSlice({
  name: "prof",
  initialState: {experiences:[] },
  reducers: {
  
    changeExperience: (state, action) => {
        if (action.payload && action.payload.experiences) {
          state.experiences = action.payload.experiences;
        }
      },
    
    
  }
});

export const { changeExperience } = ProfSlice.actions; 

export const getprof=(state)=>state.prof.experiences;

export default ProfSlice.reducer;