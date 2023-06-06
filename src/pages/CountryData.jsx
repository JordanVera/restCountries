import ButtonAppBar from '../Components/Appbar';
import { useContext } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Country from '../Components/Country';

import ThemeContext from '../themes/ThemeContext';
import { dark, light } from '../themes/var';

import '../styles/Country.css';

const CountryData = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <ButtonAppBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Container id="country" maxWidth={false} sx={{ maxWidth: '1280px' }}>
        <Country />
      </Container>
    </ThemeProvider>
  );
};
export default CountryData;
