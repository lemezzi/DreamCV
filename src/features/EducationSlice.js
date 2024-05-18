import { createSlice } from '@reduxjs/toolkit';

export const EducationSlice = createSlice({
  name: "education",
  initialState: {schoolName:"",educations:[] },
  reducers: {
    changeSchool: (state, action) => {
        if (action.payload && action.payload.schoolName) {
          state.schoolName = action.payload.schoolName;
        }
      },
    changeEducation: (state, action) => {
        if (action.payload && action.payload.educations) {
          state.educations = action.payload.educations;
        }
      },
    
    
  }
});

export const { changeSchool,changeEducation } = EducationSlice.actions; 
export const getSchool = (state) => state.education.schoolName;
export const geteducat=(state)=>state.education.educations;

export default EducationSlice.reducer;