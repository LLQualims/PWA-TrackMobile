import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = (
    <Box
      sx={{ width: 250,
        bgcolor: 'primary',
       }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
         <div className='menu-container'>
          <div className="image-container">
            <img src={require("../../assets/Images/STD_MenuScan-210-1.png")} alt="Menu Rechercher" className="top-image" onClick={() => navigate('/scan')}/>
          </div>
          <div className="image-container">
            <img src={require("../../assets/Images/APP_Menu-210-1.png")} alt="Menu Appareils" className="bottom-image" onClick={() =>  navigate('/appareils')}/>
            <img src={require("../../assets/Images/LAR_Menu-210-1.png")} alt="Menu Conditionnement" className="bottom-image" onClick={() =>  navigate('/conditionnements')}/>
          </div>
        </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
