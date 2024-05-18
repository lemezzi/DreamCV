// BasicCv.jsx
import React from 'react';
import './BasicCv.css';
import { useSelector } from 'react-redux';
import { getMail, getNom, getTelph, getAdress, getGit, getLink, getDescrip } from '../features/CvSlice';
import { geteducat } from '../features/EducationSlice';
import { FaArrowRight } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { getprof } from '../features/ProfSlice';


function BasicCv() {
    const ali = useSelector(getNom);
    const phone = useSelector(getTelph);
    const mail = useSelector(getMail);
    const adress = useSelector(getAdress);
    const git = useSelector(getGit);
    const linked = useSelector(getLink);
    const descrip=useSelector(getDescrip);
   const educat=useSelector(geteducat);
   const exp=useSelector(getprof);
    return (
        <div className="BasicCv">
            <div id="cv-content" className="Cvside">
                <header>
                    <h1 className='Nom'>{ali}</h1>
                    <p className='adress'><GiPositionMarker />{adress}</p>
                    <div className='contain'>
                        <a href={`tel:${phone}`}><FaPhone /> {phone}</a>
                        <a href={`mailto:${mail}`}><IoIosMail /> {mail}</a>
                        <a href={git} target="_blank" rel="noopener noreferrer"><FaGithub /> {git}</a>
                        <a href={linked} target="_blank" rel="noopener noreferrer"><FaLinkedin /> {linked}</a>
                    </div>
                    <div className='ligne'></div>
                    <div className='descripa'><p>{descrip}</p></div>
                </header>
                
                <section className="education">
                    <h2>Education</h2>
                    <div className='ligne'></div>
       <p></p>
                    <div className="educat">
        {educat.map((ed, index) => (
          <div key={index} className="items">
          <div className='lig1'>
            <p> <b>{ed.schoolName.toUpperCase()}</b> </p>
            <div className='part2'><p>{ed.from} <FaArrowRight /> </p>
            <p>{ed.to}</p></div>
          </div>
          <div className='part3' > <p>{ed.subject}</p> <p >{ed.city}</p></div>
          <p className='des'>{ed.degree}</p>
          
        </div>
        
        ))}
      </div>

                </section>
                
                <section className="experience">
                    <h2>Expérience Professionnelle</h2>
                    <div className='ligne'></div>

                    <div className="educat">
        {exp.map((experience, index) => (
          <div key={index} className="items">
            
            <div className='lig1'>
<p> <b>{experience.companyName.toUpperCase()}</b></p>  <div className='part2'><p>{experience.from} <FaArrowRight /> </p>
            <p>{experience.to}</p></div></div>
            <div className='part3' > <p>{experience.description}</p> <p >{experience.city}</p></div>

         <p className='des'> {experience.position}</p>
          
           
          </div>
        ))}
      </div>
                </section>
                
                <section className="skills">
                    <h2>Compétences</h2>
                    <ul>
                        <li>Compétence A</li>
                        <li>Compétence B</li>
                        {/* Ajoute d'autres compétences */}
                    </ul>
                </section>
                <section className="languages">
                    <h2>Langues</h2>
                    <ul>
                        <li>Langue A - Niveau</li>
                        <li>Langue B - Niveau</li>
                        {/* Ajoute d'autres langues */}
                    </ul>
                </section>
                <section className="interests">
                    <h2>Centres d'intérêt</h2>
                    <ul>
                        <li>Intérêt A</li>
                        <li>Intérêt B</li>
                        {/* Ajoute d'autres centres d'intérêt */}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default BasicCv;
