import React, { useState, useEffect } from 'react';
import './Experience.css'; 
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {  changeExperience} from '../features/ProfSlice';



function Experience() {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [city, setCity] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const [experiences, setExperiences] = useState([]);
  const [visible,setVisible]=useState(false);
  
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(changeExperience({ experiences }));
  }, [experiences, dispatch]);

  const toggleFormVisibility=()=>{
    setVisible(!visible);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (verif()) {
      const newExperience = {
        companyName: companyName,
        position: position,
        city: city,
        from: from,
        to: to,
        description: description
      };

      if (editingIndex !== null) {
        const updatedExperiences = [...experiences];
        updatedExperiences[editingIndex] = newExperience;
        setExperiences(updatedExperiences);
        setEditingIndex(null);
      } else {
        setExperiences([...experiences, newExperience]);
      }

      setCompanyName('');
      setPosition('');
      setCity('');
      setFrom('');
      setTo('');
      setDescription('');
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  const handleEdit = (index) => {
    const experienceToEdit = experiences[index];
    setCompanyName(experienceToEdit.companyName);
    setPosition(experienceToEdit.position);
    setCity(experienceToEdit.city);
    setFrom(experienceToEdit.from);
    setTo(experienceToEdit.to);
    setDescription(experienceToEdit.description);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const verif = () => {
    return (companyName !== "" && position !== "" && city !== "" && from !== "" && to !== "" && description !== "");
  };

  return (
    <div className="experience-container">
      <h2>Informations sur l'expérience professionnelle <button onClick={toggleFormVisibility}>
        {visible ? <><FaArrowUp /></>: <><FaArrowDown /></>}
      </button></h2>

      {visible&&(<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Nom de l'entreprise :</label>
          <input type="text" id="companyName" name="companyName" placeholder="Entrez le nom de l'entreprise" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="position">Outils de Développement  :</label>
          <input type="text" id="position" name="position" placeholder="Entrez le poste" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville :</label>
          <input type="text" id="city" name="city" placeholder="Entrez la ville" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="from">De :</label>
          <input type="date" id="from" name="from" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="to">À :</label>
          <input type="date" id="to" name="to" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea id="description" name="description" placeholder="Entrez une description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">{editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}</button>
        </form>)}
        <div className="added-experiences">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <p>Nom de l'entreprise : {experience.companyName}</p>
            <p>Outils de Développement  : {experience.position}</p>
            <p>Ville : {experience.city}</p>
            <p>De : {experience.from}</p>
            <p>À : {experience.to}</p>
            <p>Description : {experience.description}</p>
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
          </div>
        ))}
      </div>

   
    </div>
  );
}

export default Experience;
