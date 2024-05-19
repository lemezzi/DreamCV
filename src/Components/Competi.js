import React, { useState, useEffect } from 'react';
import './Competi.css';
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeLanguages } from '../features/CompetSlice'; 

function Competi() {
  const [language, setLanguage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeLanguages({ languages }));
  }, [languages, dispatch]);

  const toggleFormVisibility = () => {
    setVisible(!visible);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (language !== '') {
      const newLanguage = { language: language };

      if (editingIndex !== null) {
        const updatedLanguages = [...languages];
        updatedLanguages[editingIndex] = newLanguage;
        setLanguages(updatedLanguages);
        setEditingIndex(null);
      } else {
        setLanguages([...languages, newLanguage]);
      }

      setLanguage('');
    } else {
      alert("Veuillez remplir le champ de langage de programmation !");
    }
  };

  const handleEdit = (index) => {
    const languageToEdit = languages[index];
    setLanguage(languageToEdit.language);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="compet-container">
      <h2>Compétences en Langages de Programmation <button onClick={toggleFormVisibility}>
        {visible ? <FaArrowUp /> : <FaArrowDown />}
      </button></h2>

      {visible && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="language">Langage de programmation :</label>
            <input type="text" id="language" name="language" placeholder="Entrez le langage de programmation" value={language} onChange={(e) => setLanguage(e.target.value)} />
          </div>
          <button type="submit">{editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}</button>
        </form>
      )}

      <div className="added-languages">
        {languages.map((lang, index) => (
          <div key={index} className="language-item">
            <p>Langage de programmation : {lang.language}</p>
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competi;
