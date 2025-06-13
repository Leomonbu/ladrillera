import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import LoginButton from '../components/LoginButton';
import Indicators from '../components/Indicators';
import Charts from '../components/Charts';

function Dashboard() {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', // nombre del día (e.g. Friday)
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard ladrillera
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>

      <Container>
        <Box mt={4}>
          <Typography variant="h4">Bienvenido a su reporte!</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {currentDate}
          </Typography>
        </Box>

        <Indicators />
        <Charts />
      </Container>
    </>
  );
}

export default Dashboard;
