import React,  { useState, useEffect }  from 'react';
import BarcodeReader from '../../components/BarcodeReader';
import { TextField, Button, Box, Typography } from '@mui/material';
import '../STDConnexionServeur/STDConnexionServeur.css';
import theme from '../../theme';

const isBarcodeDetectionSupported = async () => {
    if ('BarcodeDetector' in window) {
      const formats = await window.BarcodeDetector.getSupportedFormats();
      return formats.includes('qr_code');
    }
    return false;
  };

const FenConnexionServeur = () => {

    const [supported, setSupported] = useState(false);

    useEffect(() => {
        const checkSupport = async () => {
          const supported = await isBarcodeDetectionSupported();
          setSupported(supported);
        };
    
        checkSupport();
      }, []);
  
    const handleScan = (result) => {
       // Stockage des informations dans le localStorage
       console.log(result);
       //window.localStorage.setItem("UrlServeur", result);
     };
    
     const handleSubmit = async (event) => {
        event.preventDefault(); 
    };
  
return (
    <div>
      <img src={require("../../assets/TM_Titre.png")} className="titre" alt="titre" />
      <h1> Bienvenue sur Track Mobile !</h1>
      {supported ? (
             <div>
                <h4> Scanner le QR Code de connexion</h4>
                <BarcodeReader onScan={handleScan} />
            </div>
        ) : (
            <div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <h4> Entrez l'adresse du serveur</h4>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <TextField style={{ background: 'white' }} placeholder="https://trackmobile.com" variant="outlined" className='search-bar' margin="normal"/>
                        <Button variant="contained" type="submit" style={{ marginTop: '20px', width: '15%', background: 'white', color:'#00759C', fontWeight: 'bold'}}> Connexion </Button>
                    </Box>
                </form>

            </div>
            )}

        <h4> Si vous ne disposez pas de licence Track Mobile, contactez Inoky</h4>
    </div>
    
      
  );
  
};

export default FenConnexionServeur;
