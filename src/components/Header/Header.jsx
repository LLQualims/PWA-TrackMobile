import React, { useState } from 'react';
import './Header.css'; // Assure-toi que ton CSS est correctement importé
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: 'white', 
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon sx={{ color: 'black' }} /> {/* Icône du menu en noir */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/" className="HeaderLink">Accueil</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/scan" className="HeaderLink">Scan</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/appareils" className="HeaderLink">Appareils</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/conditionnements" className="HeaderLink">Conditionnements</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/connexionserveur" className="HeaderLink">Connexion Serveur</Link></MenuItem>
            </Menu>
          </>
        ) : (
          <div className="Nav">
            <ul>
              <li><Link to="/" className="HeaderLink">Accueil</Link></li>
              <li><Link to="/scan" className="HeaderLink">Scan</Link></li>
              <li><Link to="/appareils" className="HeaderLink">Appareils</Link></li>
              <li><Link to="/conditionnements" className="HeaderLink">Conditionnements</Link></li>
              <li><Link to="/connexionserveur" className="HeaderLink">Connexion Serveur</Link></li>
            </ul>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;