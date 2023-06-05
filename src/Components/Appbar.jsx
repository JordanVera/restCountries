import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <Container maxWidth={false} sx={{ maxWidth: '1280px' }}>
            <div className="grid-container">
              <div className="left-element">
                {' '}
                <IconButton
                  href="/"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <h5 className="appbarHeader">Where in the world?</h5>
                </IconButton>
              </div>
              <div className="right-element">
                <IconButton size="small" edge="start">
                  <p className="appbarHeader">Dark Theme</p>
                </IconButton>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
