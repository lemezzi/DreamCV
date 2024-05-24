import React, { useState } from 'react';
import './CreativeCv.css'; 


import './BasicCv.css';
import { useSelector } from 'react-redux';
import { getMail, getNom, getTelph, getAdress, getGit, getLink, getDescrip, getImage } from '../features/CvSlice';
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

function CreativeCv() { 
    const [verticalBarColor, setVerticalBarColor] = useState('#5fadad'); 
    const [horizontalBarColor, setHorizontalBarColor] = useState('#1f212d');
    const [fontFamily, setFontFamily] = useState("'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif");    const ali = useSelector(getNom);
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
   const image=useSelector(getImage);
    return (
        <div>
            
            <div className='mezzi'>
           <div className='container'>
            <h3>Choisissez les caractéristiques que vous souhaitez</h3>
            <input type="color" value={verticalBarColor} onChange={(e) => setVerticalBarColor(e.target.value)} />
            <input type="color" value={horizontalBarColor} onChange={(e) => setHorizontalBarColor(e.target.value)} />
            <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">Trebuchet MS</option>
            </select>
            </div>
            
            

            <div className="CreativeCv" id="cv-content">
            
          <div className='barreverticale' style={{ backgroundColor: verticalBarColor ,fontFamily:fontFamily}}>                    
          <div className='desss'><h3>À PROPOS DE MOI</h3> <p>{descrip}</p></div>
          <div className='lig'></div>
 <div className='des2'><h2>Compétences</h2>
  <div className="langages-ajoutes">
    {sub.map((lang, index) => (
      <div key={index} className="item-langage">
        <p><b>{lang.language}</b></p>
      </div>
    ))}
  </div>
</div> 

<div className='lig'></div>

<section className="des2">
                    <h2>Langues</h2>

        {lang.map((language, index) => (
          <div key={index}>
            
           
                        <li><b>{language.language.toUpperCase()} <b>:</b> {language.level}</b></li>
                       
                       
                  
          
          </div>
        ))}
                    
                </section>



</div>
          <div className='barrehorizantale' style={{ backgroundColor: horizontalBarColor,fontFamily:fontFamily }}>  <header>
                   
                    <div className='head'> <h1 className='Nom'>{ali}</h1>
                    {image && <img src={image} alt="Profile" className="profile-image" />}
                    <p className='adress'><GiPositionMarker />{adress}</p></div>
                   
                    <div className='contain'>
                        <a href={`tel:${phone}`}><FaPhone /> {phone}</a>
                        <a href={`mailto:${mail}`}><IoIosMail /> {mail}</a>
                        <a href={git} target="_blank" rel="noopener noreferrer"><FaGithub /> {git}</a>
                        <a href={linked} target="_blank" rel="noopener noreferrer"><FaLinkedin /> {linked}</a>
                    </div>
                </header>
          </div>
         
          <div className='autre' style={{  fontFamily:fontFamily}}>    <section className="education">
                    <h2>Education</h2>
                    <div className='ligne'></div>
       <p></p>
       <div className="educat">
  {educat.map((ed, index) => (
    <div key={index} className="items">
      <div className='lig1'>
        <p><b>{ed.schoolName.toUpperCase()}</b></p>
        <div className='part2'>
          <p>
            <b>
              {(() => {
                const fromDateParts = ed.from.split('-');
                const fromYearMonth = fromDateParts[0] + '-' + fromDateParts[1];
                return fromYearMonth;
              })()}
            </b>
            <FaArrowRight />
          </p>
          <p>
            <b>
              {(() => {
                const toDateParts = ed.to.split('-');
                const toYearMonth = toDateParts[0] + '-' + toDateParts[1];
                return toYearMonth;
              })()}
            </b>
          </p>
        </div>
      </div>
      <div className='part3'>
        <p>{ed.subject}</p>
        <p className='cit'><GiPositionMarker /><b>{ed.city}</b></p>
      </div>
      <p className='des'><b>Diplôme : </b> {ed.degree}</p>
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
      <p><b>{experience.companyName.toUpperCase()}</b></p>
      <div className='part2'>
        <p>
          <b>
            {(() => {
              const fromDateParts = experience.from.split('-');
              const fromYearMonth = fromDateParts[0] + '-' + fromDateParts[1];
              return fromYearMonth;
            })()}
          </b>
          <FaArrowRight />
        </p>
        <p>
          <b>
            {(() => {
              const toDateParts = experience.to.split('-');
              const toYearMonth = toDateParts[0] + '-' + toDateParts[1];
              return toYearMonth;
            })()}
          </b>
        </p>
      </div>
    </div>
    <div className='part3'>
      <p>{experience.description}</p>
      <p className='cit'><GiPositionMarker /><b>{experience.city}</b></p>
    </div>
    <p><b>Outils:</b> {experience.position}</p>
  </div>
))}
      </div>
                </section></div>
                </div>
      </div>
        
        
        </div>
       
    );
}

export default CreativeCv; // Gardé l'export du composant en CreativeCv
