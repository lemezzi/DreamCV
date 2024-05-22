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

    const generateAndSharePDF = async () => {
        const cvContent = document.getElementById('cv-content');
      
        try {
          const canvas = await html2canvas(cvContent, {
            allowTaint: true,
            useCORS: true,
            scale: window.devicePixelRatio
          });
      
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
          const pdfBlob = pdf.output('blob');
      
          if (navigator.share) {
            await navigator.share({
              files: [pdfBlob],
              title: 'CV PDF',
              text: 'Voici mon CV en PDF.'
            });
          } else {
            console.error('Web Share API not supported');
          }
        } catch (error) {
          console.error('Error generating or sharing PDF:', error);
        }
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
            <button onClick={generateAndSharePDF} className="download-button">Télécharger en PDF</button>


            {selectedCv === 'basic' && <BasicCv />}
            {selectedCv === 'professional' && <ProfessionalCv />}
            {selectedCv === 'creative' && <CreativeCv />}
        </div>
    );
}

export default CvList;
