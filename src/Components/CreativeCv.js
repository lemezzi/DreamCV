import './CreativeCv.css';
// BasicCv.jsx

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
import { getLanguages } from '../features/CompetSlice';
import { getLangue } from '../features/LanguageSlice';

function CreativeCv() {
    const name = useSelector(getNom);
    const phone = useSelector(getTelph);
    const email = useSelector(getMail);
    const address = useSelector(getAdress);
    const github = useSelector(getGit);
    const linkedin = useSelector(getLink);
    const description = useSelector(getDescrip);
    const education = useSelector(geteducat);
    const experience = useSelector(getprof);
    const skills = useSelector(getLanguages);
    const languages = useSelector(getLangue);
    
    return (
        <div className="CreativeCv">
            <div id="cv-content" className="Cvside">
                <header>
                    <h1 className='name'>{name}</h1>
                    <p className='address'><GiPositionMarker />{address}</p>
                    <div className='contact-info'>
                        <a href={`tel:${phone}`}><FaPhone /> {phone}</a>
                        <a href={`mailto:${email}`}><IoIosMail /> {email}</a>
                        <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /> {github}</a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> {linkedin}</a>
                    </div>
                    <div className='divider'></div>
                    <div className='description'><p>{description}</p></div>
                </header>
                
                <section className="education">
                    <h2>Education</h2>
                    <div className='divider'></div>
                    <div className="education-list">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className='row'>
                                    <p><b>{edu.schoolName.toUpperCase()}</b></p>
                                    <div className='date-range'>
                                        <p>{edu.from} <FaArrowRight /> </p>
                                        <p>{edu.to}</p>
                                    </div>
                                </div>
                                <div className='details'>
                                    <p>{edu.subject}</p>
                                    <p><GiPositionMarker />{edu.city}</p>
                                </div>
                                <p className='degree'>{edu.degree}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="experience">
                    <h2>Experience Professionnelle</h2>
                    <div className='divider'></div>
                    <div className="experience-list">
                        {experience.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <div className='row'>
                                    <p><b>{exp.companyName.toUpperCase()}</b></p>
                                    <div className='date-range'>
                                        <p>{exp.from} <FaArrowRight /> </p>
                                        <p>{exp.to}</p>
                                    </div>
                                </div>
                                <div className='details'>
                                    <p>{exp.description}</p>
                                    <p><GiPositionMarker />{exp.city}</p>
                                </div>
                                <p className='position'>{exp.position}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="skills">
                    <h2>Compétences</h2>
                    <div className='divider'></div>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <p>{skill.language}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="languages">
                    <h2>Langues</h2>
                    <div className='divider'></div>
                    {languages.map((lang, index) => (
                        <div key={index} className="language-item">
                            <ul>
                                <li><b>{lang.language.toUpperCase()}: {lang.level}</b></li>
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
            <div className='divider'></div>
        </div>
    );
}

export default CreativeCv;
