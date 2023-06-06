import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function ButtonAppBar({ isDarkTheme, setIsDarkTheme }) {
  const toggleTheme = (e) => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <Container maxWidth={false} sx={{ maxWidth: '1280px' }}>
            <div className="grid-container">
              <div className="left-element">
                {' '}
                <Link to="/" className="appbarLink">
                  <h4 className="appbarHeader">Where in the world?</h4>
                </Link>
              </div>
              <div className="right-element">
                <Button size="small" onClick={toggleTheme}>
                  {isDarkTheme ? (
                    <DarkModeIcon className="icon" />
                  ) : (
                    <DarkModeOutlinedIcon className="icon" />
                  )}
                  <p className="themeToggle">Dark Mode</p>
                </Button>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
