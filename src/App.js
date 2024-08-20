import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// Pages
import BarcodeReader from './pages/STDSCAN/STDSCAN';
import FenPrincipale from './pages/FENPRIN/FENPRIN';
import FenConnexionServeur from './pages/STDConnexionServeur/STDConnexionServeur';
import APPAPVIS from './pages/APPAPVIS/APPAPVIS';
import APPAPFIC from './pages/APPAPFIC/APPAPFIC';
import STDLogin from './pages/STDLOGIN/STDLOGIN';

// Hooks
import { useAuth } from './components/hooks/useAuth';

// UI
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route index element={< FenPrincipale/>} />
        <Route path="/connexionserveur" element={<FenConnexionServeur/>} />
        <Route path="/login" element={<STDLogin />} />
        <Route path="/scan" element={<BarcodeReader />} />
        <Route path="/appareils" element={<APPAPVIS />} />
        <Route path="/appareils/:numeroAppareil" element={<APPAPFIC />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>  
  );
}

export default App;
