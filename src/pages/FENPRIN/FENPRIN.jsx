import React from 'react';
import './FENPRIN.css';
import Header from '../../components/Header/Header';

const FenPrincipale = () => {
  return (
    <div className='FENPRIN'>
      <img src={require("../../assets/TM_Titre.png")} className="titre" alt="titre" />
      <Header/>  
    </div>
    
      
  );
  
};

export default FenPrincipale;
