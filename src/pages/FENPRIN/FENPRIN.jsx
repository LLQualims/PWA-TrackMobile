import React from 'react';
import './FENPRIN.css';
import { useNavigate } from 'react-router-dom';

const FenPrincipale = () => {

  const navigate = useNavigate();

  return (
    <div className='FENPRIN'>
      <img src={require("../../assets/TM_Titre.png")} className="titrefen" alt="titre" />
        <div className='menu-container'>
          <div className="image-container">
            <img src={require("../../assets/Images/STD_MenuScan-210-1.png")} alt="Menu Rechercher" className="top-image" onClick={() => navigate('/scan')}/>
          </div>
                <div className="image-container">
            <img src={require("../../assets/Images/APP_Menu-210-1.png")} alt="Menu Appareils" className="bottom-image" onClick={() =>  navigate('/appareils')}/>
            <img src={require("../../assets/Images/LAR_Menu-210-1.png")} alt="Menu Conditionnement" className="bottom-image" onClick={() =>  navigate('/conditionnements')}/>
          </div>
        </div>
    </div>
  );
  
};

export default FenPrincipale;
