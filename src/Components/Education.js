import React, { useState, useEffect } from 'react';
import './Education.css';
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeSchool, changeEducation } from '../features/EducationSlice';

function Education() {
  const [schoolName, setSchoolName] = useState('');
  const [subject, setSubject] = useState('');
  const [degree, setDegree] = useState('');
  const [city, setCity] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [educations, setEducations] = useState([]);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeEducation({ educations }));
  }, [educations, dispatch]);

  const toggleFormVisibility = () => {
    setVisible(!visible);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (verif()) {
      dispatch(changeSchool({ schoolName }));

      const newEducation = {
        schoolName: schoolName,
        subject: subject,
        degree: degree,
        city: city,
        from: from,
        to: to
      };

      if (editingIndex !== null) {
        const updatedEducations = [...educations];
        updatedEducations[editingIndex] = newEducation;
        setEducations(updatedEducations);
        setEditingIndex(null);
      } else {
        setEducations([...educations, newEducation]);
      }

      setSchoolName('');
      setSubject('');
      setDegree('');
      setCity('');
      setFrom('');
      setTo('');
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  const handleEdit = (index) => {
    const EducationToEdit = educations[index];
    setSchoolName(EducationToEdit.schoolName);
    setSubject(EducationToEdit.subject);
    setDegree(EducationToEdit.degree);
    setCity(EducationToEdit.city);
    setFrom(EducationToEdit.from);
    setTo(EducationToEdit.to);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const verif = () => {
    return (schoolName !== "" && subject !== "" && degree !== "" && city !== "" && from !== "" && to !== "");
  };

  return (
    <div className="education-container">
      <h2>Informations sur l'éducation <button onClick={toggleFormVisibility}>
        {visible ? <><FaArrowUp /></> : <><FaArrowDown /></>}
      </button></h2>

      {visible && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">Nom de l'école :</label>
            <input type="text" id="schoolName" name="schoolName" placeholder="Entrez le nom de l'école" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Description :</label>
            <input type="text" id="subject" name="subject" placeholder="Entrez la matière" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Diplôme :</label>
            <input type="text" id="degree" name="degree" placeholder="Entrez le diplôme" value={degree} onChange={(e) => setDegree(e.target.value)} />
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
          <button type="submit">{editingIndex !== null ? "Modifier" : <>Ajouter <FaPlus /></>}</button>
        </form>
      )}

      <div className="added-educations">
        {educations.map((education, index) => (
          <div key={index} className="education-item">
            <p>Nom de l'école : {education.schoolName}</p>
            <p>Matière : {education.subject}</p>
            <p>Diplôme : {education.degree}</p>
            <p>Ville : {education.city}</p>
            <p>De : {education.from}</p>
            <p>À : {education.to}</p>
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button className="delete" onClick={() => handleDelete(index)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
