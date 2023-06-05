import ButtonAppBar from '../Components/Appbar';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Country from '../Components/Country';

import '../styles/Country.css';

const light = {
  palette: {
    primary: {
      main: '#A445ED',
    },
    mode: 'light',
  },
};

const dark = {
  palette: {
    primary: {
      main: '#A445ED',
    },
    mode: 'dark',
  },
};

const CountryData = () => {
  return (
    <ThemeProvider theme={createTheme(dark)}>
      <ButtonAppBar />
      <Container id="country" maxWidth={false} sx={{ maxWidth: '1280px' }}>
        <Country />
      </Container>
    </ThemeProvider>
  );
};
export default CountryData;
