import { configureStore } from "@reduxjs/toolkit";
import CvSlice from "../features/CvSlice";
import EducationSlice from "../features/EducationSlice";
import ProfSlice from "../features/ProfSlice";
import CompetSlice from "../features/CompetSlice"; // Importez le CompetSlice
import LanguageSlice from "../features/LanguageSlice"; // Importez le CompetSlice


export default configureStore({
  reducer: {
    personal: CvSlice,
    education: EducationSlice,
    prof: ProfSlice,
    compet: CompetSlice, 
    long:LanguageSlice,

  },
});
