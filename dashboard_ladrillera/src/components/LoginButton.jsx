import React from 'react';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function LoginButton() {
  const handleLogin = () => {
    // Aquí va tu lógica de login (redirección o auth)
    alert('Redirecting to login...');
  };

  return (
    <Button color="inherit" startIcon={<LoginIcon />} onClick={handleLogin}>
      Inicio Sesion
    </Button>
  );
}

export default LoginButton;
