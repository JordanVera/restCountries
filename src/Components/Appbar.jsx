import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <Container maxWidth={false} sx={{ maxWidth: '1280px' }}>
            <div className="grid-container">
              <div className="left-element">
                {' '}
                <Link to="/">
                  <h4 className="appbarHeader">Where in the world?</h4>
                </Link>
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
