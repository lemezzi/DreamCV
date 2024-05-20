// BasicCv.jsx
import React, { useDebugValue } from 'react';
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
import { getLanguages} from '../features/CompetSlice';
import { getLangue } from '../features/LanguageSlice';


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
   const sub=useSelector(getLanguages);
   const lang=useSelector(getLangue);
    return (
        <div className="BasicCv">
            <div id="cv-content" className="Cvside">
                <header>
                    <div className='head'> <h1 className='Nom'>{ali}</h1>
                    <p className='adress'><GiPositionMarker />{adress}</p></div>
                   
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
            <div className='part2'><p><b>{ed.from}</b> <FaArrowRight /> </p>
            <p> <b>{ed.to}</b></p></div>
          </div>
          <div className='part3' > <p>{ed.subject}</p> <p className='cit'><GiPositionMarker /><b>{ed.city}</b></p></div>
          <p className='des'> <b>Diplôme : </b> {ed.degree}</p>
          
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
<p> <b>{experience.companyName.toUpperCase()}</b></p>  <div className='part2'><p><b>{experience.from}</b> <FaArrowRight /> </p>
            <p><b>{experience.to}</b></p></div></div>
            <div className='part3' > <p>{experience.description}</p> <p  className='cit'><GiPositionMarker /><b>{experience.city}</b></p></div>

         <p><b>Outils:</b>  {experience.position}</p>
          
           
          </div>
        ))}
      </div>
                </section>
                
                <section className="skills">
                    <h2>Compétences</h2>
                    <div className='ligne'></div>

                    <div className="added-language">
        {sub.map((lang, index) => (
          <div key={index} className="language-items">
            <p>{lang.language}</p>
           
          </div>
        ))}
      </div>
                </section>
                <section className="languages">
                    <h2>Langues</h2>
                    <div className='ligne'></div>

        {lang.map((language, index) => (
          <div key={index}>
            
            <ul>
                        <li><b>{language.language.toUpperCase()} <b>:</b> {language.level}</b></li>
                       
                       
                    </ul>
          
          </div>
        ))}
                    
                </section>
                
            </div>

            
        </div>
    );
}

export default BasicCv;
