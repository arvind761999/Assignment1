import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import Weather from './components/Weather';

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Weather />
    </div>
  );
}

export default App;
