// src/components/Indicators.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const indicators = [
  { title: 'Elaborados', value: 1200 },
  { title: 'Vendidos', value: '3450' },
  { title: 'Pendientes entrega', value: 278 },
  { title: 'Margen ganancia', value: '5.2%' }
];

function Indicators() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {indicators.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">{item.title}</Typography>
            <Typography variant="h5">{item.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Indicators;