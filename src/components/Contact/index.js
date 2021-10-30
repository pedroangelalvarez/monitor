import React from 'react';
import Footer from '../Footer/index.js';
import '../../fonts/homemade.css';
import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'

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

theme.typography.h4 = {
  color: '#9F2914',
  fontFamily: 'Roboto',
  fontSize: '0.6rem',
  '@media (min-width:100px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
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

export class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }


  render() {
    return (
      <div>
        <div style={{textAlign:'center'}}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Contáctanos</Typography>
              </ThemeProvider>
          </div>
          <br/>
          <div style={{display: 'flex',flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'center', alignItems: 'auto',alignContent: 'start'}}>
                <div style={{ display: 'inline-block',marginRight:'2%'}}>
                  <MuiThemeProvider theme={theme}>
                  <TextField style={{width: '400px'}} id="name" label="Nombre" variant="filled"  color="primary"/>
                  <br/>
                  <br/>
                  <TextField style={{width: '400px'}} id="name" label="Email" variant="filled"  color="primary"/>
                  <br/>
                  <br/>
                  <TextField style={{width: '400px'}} id="name" label="Empresa" variant="filled" color="primary"/>
                  <br/>
                  <br/>
                  <TextField multiline rows={3} style={{width: '400px'}} id="name" label="Mensaje" variant="filled"  color="primary"/>
                  <br/>
                  <br/>
                  <Button style={{display: 'inline-block'}} size="large" variant="contained" color="primary">
                    Enviar
                  </Button>
                  </MuiThemeProvider>
                </div>
                <div style={{display: 'inline-block',marginLeft:'2%',width:'25%'}}>
                <iframe className="actAsDiv" style={{width:'100%',height:'100%'}} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;q=Av.%20Arriaga%20%23800%20-%20Chicama%20Pueblo&amp;aq=0&amp;ie=UTF8&amp;t=m&amp;z=16&amp;iwloc=A&amp;output=embed"></iframe>
                </div>    
          </div>
          <br/>
          <br/>
          <div style={{display: 'flex',  flexWrap: 'wrap',  flexDirection: 'row',  justifyContent: 'center',  alignItems: 'center',  alignContent: 'start'}}>
            <div style={{flex: '0 0 auto', margin: '20px'}} >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ color: '#9F2914',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>Celular:
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto", fontStyle:"Thin", color: '#0C0C0C',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>999 868 014 / 990 809 785
              </Typography>
              </ThemeProvider>
            </div>
            <div style={{flex: '0 0 auto', margin: '20px'}} >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ color: '#9F2914',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>Escríbenos:
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto", fontStyle:"Thin", color: '#0C0C0C',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>jefe.ventas@avicolalescano.com
              </Typography>
              </ThemeProvider>
            </div>
          </div>
          <div style={{textAlign:'center'}}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ color: '#9F2914',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>Ubícanos:
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto", fontStyle:"Thin", color: '#0C0C0C',fontSize: '1.0rem',
                '@media (min-width:300px)': {
                  fontSize: '1.2rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.0rem',
                }}}>-Av. Arriaga #800 - Chicama Pueblo / Trujillo<br/>
                -Pj. 24 de Junio Int. 93 Asoc. Prod. A. Merc. Santa Anita / Lima
              </Typography>
              </ThemeProvider>
          </div>
          <Footer />
      </div>
  )}
}

export default Contact;
