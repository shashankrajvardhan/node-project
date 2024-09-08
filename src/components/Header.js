import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome, John Mathew!!
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Orders</Button>
        <Button color="inherit">Integrations</Button>
        <Button color="inherit">Tracking Page</Button>
        <Button color="inherit">Partner with Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
