import './APPAPVIS.css'
import Header from '../../components/Header/Header';
import DataList from '../../components/List/ListAPP';

export default function APPAPVIS(){
    return (
      <>
      <img src={require("../../assets/Images/APP_Titre-128-1.png")} className="titre" alt="titre" />
      <Header/>
        <h2>Liste des appareils</h2>
        <DataList/>
      </>
    )    
}