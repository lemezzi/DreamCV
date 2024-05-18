import { createSlice } from '@reduxjs/toolkit';

export const cvSlice = createSlice({
  name: "personal",
  initialState: { nom: "", teleph: "", mail: "",adress:"" ,description:""},
  reducers: {
    changeName: (state, action) => {
      if (action.payload && action.payload.nom) {
        state.nom = action.payload.nom;
      }
    },
    changeTelph: (state, action) => {
      if (action.payload && action.payload.teleph) {
        state.teleph = action.payload.teleph;
      }
    },
    changeMail: (state, action) => {
      if (action.payload && action.payload.mail) {
        state.mail = action.payload.mail;
      }
    },
    changeAdress: (state, action) => {
      if (action.payload && action.payload.adress) {
        state.adress = action.payload.adress;
      }
    },
    changeGithub: (state, action) => {
      if (action.payload && action.payload.github) {
        state.github = action.payload.github;
      }
    },
    changeLinkedin: (state, action) => {
      if (action.payload && action.payload.linkedin) {
        state.linkedin = action.payload.linkedin;
      }
    },
    changeDescrip: (state, action) => {
      if (action.payload && action.payload.description) {
        state.description = action.payload.description;
      }
    }
  }
});

export const { changeName, changeTelph, changeMail,changeAdress,changeGithub,changeLinkedin ,changeDescrip} = cvSlice.actions; // Ajoutez changeMail ici
export const getNom = (state) => state.personal.nom;
export const getTelph = (state) => state.personal.teleph;
export const getMail = (state) => state.personal.mail;
export const getAdress=(state)=>state.personal.adress;
export const getGit=(state)=>state.personal.github;
export const getLink=(state)=>state.personal.linkedin;
export const getDescrip=(state)=>state.personal.description;
export default cvSlice.reducer;