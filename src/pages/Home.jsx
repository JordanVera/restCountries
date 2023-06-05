import ButtonAppBar from '../Components/Appbar';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Flags from '../Components/Flags';

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

const Home = () => {
  return (
    <ThemeProvider theme={createTheme(dark)}>
      <ButtonAppBar />
      <Container id="flags" maxWidth={false} sx={{ maxWidth: '1280px' }}>
        <Flags />
      </Container>
    </ThemeProvider>
  );
};
export default Home;
