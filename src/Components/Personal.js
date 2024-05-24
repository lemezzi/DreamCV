import React, { useState } from 'react';
import './Personal.css';
import { useDispatch } from 'react-redux';
import { changeName, changeTelph, changeMail, changeAdress, changeGithub, changeLinkedin, changeDescrip, changeImage } from "../features/CvSlice";
import { FaPlus, FaArrowDown, FaArrowUp } from "react-icons/fa";

function Personal() {
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [teleph, setTeleph] = useState("");
  const [adress, setAdress] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [personals, setPersonals] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verif()) {
      dispatch(changeTelph({ teleph }));
      dispatch(changeName({ nom }));
      dispatch(changeMail({ mail }));
      dispatch(changeAdress({ adress}));
      dispatch(changeGithub({ github: nom.replace(/\s+/g, '') + ".github" }));
dispatch(changeLinkedin({ linkedin: nom.replace(/\s+/g, '') + ".linkedin" }));
    
       dispatch(changeDescrip({ description }));
      dispatch(changeImage({ imageUrl }));

      const newPersonal = {
        nom,
        mail,
        teleph,
        adress,
        linkedin,
        github,
        description,
        imageUrl
      };

      if (editingIndex !== null) {
        const updatedPersonals = [...personals];
        updatedPersonals[editingIndex] = newPersonal;
        setPersonals(updatedPersonals);
        setEditingIndex(null);
      } else {
        setPersonals([...personals, newPersonal]);
      }

      setNom("");
      setMail("");
      setTeleph("");
      setAdress("");
      setLinkedin("");
      setGithub("");
      setDescription("");
      setImageUrl(null);
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  const verif = () => {
    return nom !== "" && mail !== "" && teleph !== "" && adress !== "" && linkedin !== "" && github !== "" && description !== "";
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
    setImageUrl(personalToEdit.imageUrl);
    setEditingIndex(index);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="personal-container">
      <h2>Informations Personnelles <button onClick={toggleFormVisibility}>
        {isFormVisible ? <><FaArrowUp /></> : <><FaArrowDown /></>}
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
            <label htmlFor="linkedin">LinkedIn :</label>
            <input
              value={linkedin}
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Entrez votre URL LinkedIn"
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
            <textarea
              id="description"
              name="description"
              placeholder="Entrez une description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image de profil :</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <button type="submit">
            {editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}
          </button>
        </form>
      )}
      <div className="added-personals">
        {personals.map((personal, index) => (
          <div key={index} className="personal-item">
            {personal.imageUrl && <img src={personal.imageUrl} alt="Profile" className="profile-image" />}
            <p>Nom : {personal.nom}</p>
            <p>Email : {personal.mail}</p>
            <p>Téléphone : {personal.teleph}</p>
            <p>Adresse : {personal.adress}</p>
            <p>LinkedIn : {personal.linkedin}</p>
            <p>Github : {personal.github}</p>
            <div className='descrip'><p>Description : {personal.description}</p></div>
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;
