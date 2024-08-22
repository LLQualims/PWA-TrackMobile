import React, { useState } from 'react';
import './Header.css'; // Assure-toi que ton CSS est correctement importé
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: 'transparent', 
        boxShadow: 'none',
        display: 'flex',
        marginTop: '30px',
        marginBottom: '20px',
        justifyContent: 'center',
        alignItems: 'center'
       }}
    >
      <Toolbar>
          <div className="Nav">
            <ul>
              <li><Link to="/scan" className="HeaderLink">Rechercher</Link></li>
              <li><Link to="/appareils" className="HeaderLink">Appareils</Link></li>
              <li><Link to="/conditionnements" className="HeaderLink">Conditionnements</Link></li>
              <li><Link to="/connexionserveur" className="HeaderLink">Connexion Serveur</Link></li>
            </ul>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;