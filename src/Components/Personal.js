import React, { useState } from 'react';
import './Personal.css'; // Fichier CSS pour le style
import { useDispatch } from 'react-redux';
import { changeName, changeTelph, changeMail, changeAdress,changeGithub, changeLinkedin,changeDescrip } from "../features/CvSlice";
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Personal() {
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [teleph, setTeleph] = useState("");
  const [adress, setAdress] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [personals, setPersonals] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const[linkedin,setLinkedin]=useState("");
  const[github,setGithub]=useState("");
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (verif()) {
      dispatch(changeTelph({ teleph }));
      dispatch(changeName({ nom }));
      dispatch(changeMail({ mail }));
      dispatch(changeAdress({ adress }));
      dispatch(changeGithub({ github }));
      dispatch(changeLinkedin({ linkedin }));
      dispatch(changeDescrip({description}));

      
      const newPersonal = {
        nom,
        mail,
        teleph,
        adress,
        linkedin,
        github,
        description
      };
  
      if (editingIndex !== null) {
        const updatedPersonals = [...personals];
        updatedPersonals[editingIndex] = newPersonal;
        setPersonals(updatedPersonals);
        setEditingIndex(null);
      } else {
        setPersonals([...personals, newPersonal]);
      }

      // Réinitialiser les champs du formulaire
      setNom("");
      setMail("");
      setTeleph("");
      setAdress("");
      setLinkedin("");
      setGithub("");
      setDescription("");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };
  
  const verif = () => {
    return nom !== "" && mail !== "" && teleph !== "" && adress !== ""&& linkedin!==""&&  github!=="" &&description
    !=="";
  };

  const handleDelete = (index) => {
    const updatedPersonals = [...personals];
    updatedPersonals.splice(index, 1);
    setPersonals(updatedPersonals);
  };

  const handleEdit = (index) => {
    const personalToEdit = personals[index];
    setNom(personalToEdit.nom);
    setMail(personalToEdit.mail);
    setTeleph(personalToEdit.teleph);
    setAdress(personalToEdit.adress);
    setLinkedin(personalToEdit.linkedin);
    setGithub(personalToEdit.github);
    setDescription(personalToEdit.description);
    setEditingIndex(index);
    
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="personal-container">
      <h2>Informations Personnelles <button onClick={toggleFormVisibility}>
        {isFormVisible ? <><FaArrowUp /></>: <><FaArrowDown /></>}
      </button></h2>
      
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nom complet :</label>
            <input
              value={nom}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Entrez votre nom complet"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              value={mail}
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone :</label>
            <input
              value={teleph}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Entrez votre numéro de téléphone"
              onChange={(e) => setTeleph(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse :</label>
            <input
              value={adress}
              type="text"
              id="address"
              name="address"
              placeholder="Entrez votre adresse"
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <input
              value={linkedin}
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Entrez votre URL linledin"
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="github">Github :</label>
            <input
              value={github}
              type="text"
              id="github"
              name="github"
              placeholder="Entrez votre URL Github"
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>

          <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea id="description" name="description" placeholder="Entrez une description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
          <div className="form-group">
            <label htmlFor="image">Image de profil :</label>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>
          <button type="submit">
            {editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}
          </button>
         
        </form>
      )} <div className="added-personals">
      {personals.map((personal, index) => (
        <div key={index} className="personal-item">
          <p>Nom : {personal.nom}</p>
          <p>Email : {personal.mail}</p>
          <p>Téléphone : {personal.teleph}</p>
          <p>Adresse : {personal.adress}</p>
          <p>LinkedIn:{personal.linkedin}</p>
          <p>Github:{personal.github}</p>
          <div className='descrip'> <p>Desctiprion:{personal.description}</p> </div>
          
          <button onClick={() => handleEdit(index)}>Modifier</button>
          <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
        </div>
      ))}
    </div>
     
    </div>
  );
}

export default Personal;
