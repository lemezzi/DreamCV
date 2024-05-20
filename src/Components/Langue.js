import React, { useState, useEffect } from 'react';
import './Langue.css';
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../features/LanguageSlice';

function Langue() {
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeLanguage({ languages }));
  }, [languages, dispatch]);

  const toggleFormVisibility = () => {
    setVisible(!visible);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (language !== '' && level !== '') {
      const newLanguage = { language, level };

      if (editingIndex !== null) {
        const updatedLanguages = [...languages];
        updatedLanguages[editingIndex] = newLanguage;
        setLanguages(updatedLanguages);
        setEditingIndex(null);
      } else {
        setLanguages([...languages, newLanguage]);
      }

      setLanguage('');
      setLevel('');
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  const handleEdit = (index) => {
    const languageToEdit = languages[index];
    setLanguage(languageToEdit.language);
    setLevel(languageToEdit.level);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="language-container">
      <h2>Langues <button onClick={toggleFormVisibility}>
        {visible ? <><FaArrowUp /></> : <><FaArrowDown /></>}
      </button></h2>

      {visible && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="language">Langue :</label>
            <input type="text" id="language" name="language" placeholder="Entrez la langue" value={language} onChange={(e) => setLanguage(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="level">Niveau :</label>
            <select id="level" name="level" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Sélectionnez le niveau</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
          </div>
          <button type="submit">{editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}</button>
        </form>
      )}

      <div className="added-languages">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <p>Langue : {language.language}</p>
            <p>Niveau : {language.level}</p>
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Langue;
