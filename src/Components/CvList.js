import React, { useState } from 'react';
import BasicCv from './BasicCv';
import ProfessionalCv from './ProfessionalCv';
import CreativeCv from './CreativeCv';
import './CvList.css';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import basicCvImage from './image2.png';
import creativeCvImage from './babacar.png';


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
              const pdfWidth = 210; // A4 size: 210mm x 297mm
              const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
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
                   <a className='cur' onClick={() => handleSelectCv('basic')}><img src={basicCvImage} alt="CV Basique" className="cv-button-image" /></a> 
                </div>
                
                <div className="cv-button-container">
                    <button className="cv-list-button" onClick={() => handleSelectCv('creative')}>CV Créatif</button>
                   <a className='cur' onClick={() => handleSelectCv('creative')}> <img src={creativeCvImage} alt="CV Basique" className="cv-button-image" /></a> 
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
