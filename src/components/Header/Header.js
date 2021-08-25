import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';
import logo from './JulesLogo.png';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#FFB100' }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}><img src={logo} className={classes.logo} align="center" />
        &nbsp;Jules Travel Consultant
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore local foods and attractions
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
