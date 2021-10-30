import React, { Component } from 'react';
import Preview from '../Preview/index.js'
import { withRouter } from 'react-router-dom';

import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import '../../fonts/homemade.css';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';

import Footer from '../Footer/index.js';


const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#9F2914'
    }
  }
});

theme.typography.h3 = {
  color: '#9F2914',
  fontFamily: 'Homemade Apple',
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.h6 = {
  color: '#FFFFFF',
  fontFamily: 'Roboto',
  fontSize: '0.6rem',
  '@media (min-width:100px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
};

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }


  render() {
    return (
      <div>
        
      </div>
  )}
}

export default About;