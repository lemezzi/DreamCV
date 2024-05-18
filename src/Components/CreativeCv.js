// CreativeCv.jsx
import React from 'react';
import './CreativeCv.css';

function CreativeCv() {
    return (
        <div className="CreativeCv">
            <div className="Cvside">
            <header>
                <h1>Mohamed Mezzi</h1>
                <p>123 france w zebi</p>
                <p>75001 Lyon</p>
                <p>Email: mohamed.Mezzi@example.com</p>
                <p>Téléphone: 01 23 45 67 89</p>
            </header>
            <section className="experience">
                <h2>Expérience Professionnelle</h2>
                <ul>
                    <li>Entreprise A - Poste A - Date de début - Date de fin</li>
                    <li>Entreprise B - Poste B - Date de début - Date de fin</li>
                    {/* Ajoute d'autres expériences professionnelles */}
                </ul>
            </section>
            <section className="education">
                <h2>Formation</h2>
                <ul>
                    <li>Université A - Diplôme A - Année d'obtention</li>
                    <li>Université B - Diplôme B - Année d'obtention</li>
                    {/* Ajoute d'autres formations */}
                </ul>
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

export default CreativeCv;
