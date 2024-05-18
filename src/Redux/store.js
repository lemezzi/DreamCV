import { configureStore } from "@reduxjs/toolkit";
import CvSlice from "../features/CvSlice";
import EducationSlice from "../features/EducationSlice";
import ProfSlice from "../features/ProfSlice";


export default configureStore({reducer:{personal:CvSlice,education:EducationSlice,prof:ProfSlice,
                                        
}})
