import React, { useState, useEffect } from 'react';
import BarcodeReader from '../../components/BarcodeReader';
import Header from '../../components/Header/Header';
import { TextField } from '@mui/material';

const isBarcodeDetectionSupported = async () => {
  if ('BarcodeDetector' in window) {
    const formats = await window.BarcodeDetector.getSupportedFormats();
    return formats.includes('qr_code', 'code_128');
  }
  return false;
};

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const ScanPage = () => {

  const [supported, setSupported] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    const checkSupport = async () => {
      const supported = await isBarcodeDetectionSupported();
      setSupported(supported);
      setIos(isIOS());
    };

    checkSupport();
  }, []);

  return (
    <div>
      <img src={require("../../assets/Images/STD_Titre-35-1.png")} className="titre" alt="titre" />
      <Header/>
          {supported ? (<BarcodeReader />) : (
            <div>
              <p className="no-support" style={{ display: supported ? 'none' : 'block' }}>
              Cette fonctionnalité n'est pas (encore) prise en charge sur votre appareil
            </p>
            {ios && (
                <p className="no-support-ios">
                  À partir d'iOS 17, cette fonctionnalité peut être activée dans les paramètres &gt; Safari &gt; Avancé &gt; Drapeaux de fonctionnalité &gt; API de détection de forme
                </p>
              )}
            <TextField label="Rechercher" variant="outlined" value={""} onChange={""} className='search-bar' margin="normal"/>
            </div>
            )}
    </div>
  );
};

export default ScanPage;
