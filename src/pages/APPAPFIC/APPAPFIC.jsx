import React from 'react';
import { useParams } from 'react-router-dom';
import DATFIC from '../../components/FIC/APP/FICAPP';
import HistoriqueList from '../../components/FIC/APP/FICHISTORIQUE';
 
export default function APPAPFIC(){
  const { idappAppareil } = useParams();
  console.log("useparam "+idappAppareil)
  return (
    <>
    <img src={require("../../assets/Images/APP_Titre-128-1.png")} className="titre" alt="titre" />
    <h2>Informations sur l'appareil </h2>
      <DATFIC/>
      <HistoriqueList/>
    </>
  )    
  
}