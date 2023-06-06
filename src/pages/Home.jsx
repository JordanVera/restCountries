import ButtonAppBar from '../Components/Appbar';
import { useContext } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Flags from '../Components/Flags';

import ThemeContext from '../themes/ThemeContext';
import { dark, light } from '../themes/var';

const Home = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <ButtonAppBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Container id="flags" maxWidth={false} sx={{ maxWidth: '1280px' }}>
        <Flags />
      </Container>
    </ThemeProvider>
  );
};
export default Home;
