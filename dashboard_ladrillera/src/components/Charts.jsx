// src/components/Charts.js
import React, { useState } from 'react';
import { Paper, Typography, Grid, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Box } from '@mui/material';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Enero', Vendidos: 400, Elaborados: 2400 },
  { name: 'Febrero', Vendidos: 300, Elaborados: 1398 },
  { name: 'Marzo', Vendidos: 500, Elaborados: 9800 },
  { name: 'Abril', Vendidos: 478, Elaborados: 3908 },
  { name: 'Mayo', Vendidos: 589, Elaborados: 4800 },
  { name: 'Junio', Vendidos: 639, Elaborados: 3800 },
  { name: 'Julio', Vendidos: 203, Elaborados: 4800 },
  { name: 'Agosto', Vendidos: 150, Elaborados: 7800 },
  { name: 'Septiembre', Vendidos: 800, Elaborados: 1000 },
  { name: 'Octubre', Vendidos: 505, Elaborados: 3500 },
  { name: 'Noviembre', Vendidos: 850, Elaborados: 2500 },
  { name: 'Diciembre', Vendidos: 150, Elaborados: 3900 },
];

const pieData = [
  { name: 'Cundinamarca', value: 400 },
  { name: 'Antioquia', value: 300 },
  { name: 'Boyaca', value: 200 },
  { name: 'Arauca', value: 150 },
];

const salesDataByRegion  = {
  'Cundinamarca': [
    { product: 'Ladrillos', amount: 1200 },
    { product: 'Bloquelon', amount: 800 },
    { product: 'Arcilla', amount: 400 },
  ],
  'Antioquia': [
    { product: 'Ladrillos', amount: 900 },
    { product: 'Bloquelon', amount: 500 },
    { product: 'Gres', amount: 150 },
  ],
  'Boyaca': [
    { product: 'Phone', amount: 1000 },
    { product: 'Arcilla', amount: 600 },
  ],
  'Arauca': [
    { product: 'Ladrillos', amount: 500 },
    { product: 'Bloquelon', amount: 400 },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Charts() {
  const [selectedRegion, setSelectedRegion] = useState(null);

const handlePieClick = (data) => {
  if (data?.name && salesDataByRegion[data.name]) {
    setSelectedRegion(data.name);
  }
};



  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, marginBottom: 5 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Rendimiento mensual</Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Vendidos" stroke="#8884d8" />
          <Line type="monotone" dataKey="Elaborados" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Ventas mensuales</Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Vendidos" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>

      <Typography variant="h6" sx={{ mb: 2 }}> Ventas x Departamentos </Typography>

      <Grid container spacing={2} alignItems="stretch" sx={{ display: 'flex', marginBottom: 5 }}>
        {/* Pie Chart */}
        <Grid item xs={12} md={6} sx={{ height: 400, minWidth: '49%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Departamentos
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  dataKey="value"
                  onClick={handlePieClick}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
        </Grid>

        {/* Table */}
        <Grid item xs={12} md={6} sx={{ minWidth: '49%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {selectedRegion ? `Sales Details – ${selectedRegion}` : 'Click sobre un departamento'}
            </Typography>

            {selectedRegion && salesDataByRegion[selectedRegion] ? (
              <TableContainer>
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Product</strong></TableCell>
                      <TableCell><strong>Amount ($)</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {salesDataByRegion[selectedRegion].map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{item.product}</TableCell>
                        <TableCell>{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Seleccione un departmento
              </Typography>
            )}
        </Grid>
      </Grid>
    </Paper>
  );

}

export default Charts;
