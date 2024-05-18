import React, { useState } from 'react';

function Compteur() {
  // Déclare une nouvelle variable d'état, que l'on va appeler "compteur"
  const [compteur, setCompteur] = useState(5);
 
  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
      <button onClick={()=>setCompteur(compteur-1)}>Decrementer</button>
    </div>
  );
}

export default Compteur;
