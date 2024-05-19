import React, { useState } from 'react';
import BasicCv from './BasicCv';
import ProfessionalCv from './ProfessionalCv';
import CreativeCv from './CreativeCv';
import './CvList.css';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import basicCvImage from './image2.png';

function CvList() {
    const [selectedCv, setSelectedCv] = useState(null);

    const handleSelectCv = (cvType) => {
        setSelectedCv(cvType);
    };

    const generatePdf = () => {
        const input = document.getElementById('cv-content');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("cv.pdf");
            })
            .catch((error) => {
                console.error("Error generating PDF: ", error);
            });
    };

    return (
        <div className="cv-list-container">
            <h2 className="cv-list-header">Choisissez le type de CV à travailler :</h2>
            <div className="cv-list-buttons">
                <div className="cv-button-container">
                  <button className="cv-list-button" onClick={() => handleSelectCv('basic')}>CV Basique</button>
                    <img src={basicCvImage} alt="CV Basique" className="cv-button-image" />
                    
                </div>
                <div className="cv-button-container">
                    <button className="cv-list-button" onClick={() => handleSelectCv('professional')}>CV Professionnel</button>
                    <img src={basicCvImage} alt="CV Basique" className="cv-button-image" />

                </div>
                <div className="cv-button-container">
                   
         <button className="cv-list-button" onClick={() => handleSelectCv('creative')}>CV Créatif</button>
         <img src={basicCvImage} alt="CV Basique" className="cv-button-image" />

                </div>
            </div>
            <button onClick={generatePdf} className="download-button">Télécharger en PDF</button>


            {selectedCv === 'basic' && <BasicCv />}
            {selectedCv === 'professional' && <ProfessionalCv />}
            {selectedCv === 'creative' && <CreativeCv />}
        </div>
    );
}

export default CvList;
