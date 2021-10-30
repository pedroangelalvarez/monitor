import React from 'react';
import { Link } from 'react-router-dom';
import 'typeface-roboto';
import './index.css';

import {
    useTheme,
    createMuiTheme,
    MuiThemeProvider,
    ThemeProvider
  } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';


import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

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
  

export class Footer extends React.Component {

    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
    }

  
  
    render() {
      return (
		<div>
          <div style={{textAlign:'center',marginBottom:'-10%'}}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/lescanoweb.appspot.com/o/recurso%2015.png?alt=media&token=13058204-d8d6-4272-a14c-7c87bfcbcc2a"}/>
            </div>
          <div style={{textAlign:'center', marginTop:'9%', marginBottom:'-5%'}}>
          <img src={"https://firebasestorage.googleapis.com/v0/b/lescanoweb.appspot.com/o/recurso%207.png?alt=media&token=22c0f6ce-1f5a-4f89-932b-3c04b66f1376"}/> 
          </div>
            <div id="dunas">
            <div id="duneleft"></div>
            <div id="duneright"></div>
          </div>
          <div style={{zIndex: '150',marginTop:'-6.1rem',left:'1%',position:'absolute'}}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto"}}>Ubícanos</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ fontSize: '0.8rem',
                '@media (min-width:100px)': {
                  fontSize: '0.9rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.5rem',
                }}}>Av. Arriaga #800 - Chicama
              </Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto"}}>Escribenos</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ fontSize: '0.8rem',
                '@media (min-width:100px)': {
                  fontSize: '0.9rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.5rem',
                }}}>avicola@avicolalescano.com</Typography>
              </ThemeProvider>
          </div>

          <div style={{zIndex: '150',marginTop:'-6.78rem',right:'1%',position:'absolute'}}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto"}}>Celular</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ fontSize: '0.8rem',
                '@media (min-width:100px)': {
                  fontSize: '0.9rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.5rem',
                }}}>968 932 941 / 978 505 508</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{fontFamily: "Roboto"}}>Síguenos en</Typography>
              </ThemeProvider>
              
              <ThemeProvider theme={theme}>
                <Typography variant="h6" style={{ fontSize: '0.8rem',
                '@media (min-width:100px)': {
                  fontSize: '0.9rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.5rem',
                }}}><FacebookIcon style={{fill: "FFFFFF"}} /> AvicolaLescano1960</Typography>
              </ThemeProvider>
          </div>
        </div>
    )}
  }
  
export default Footer;
/*
:root{
    font-size: 12pt;
    --black: #252525;
    --white: #f5f5f5;
    --orange: #ff5c63;

    --yellow-1: #ff7b62;
    --yellow-2: #ff9961;
    --yellow-3: #ffa55b;
    --yellow-4: #ffa754;
    --yellow-5: #ff9e4d;

    --brown-1: #dd666b;
    --brown-2: #a24850;
    --brown-3: #83373b;
    --brown-4: #733136;
}


.mountain1{
    position: relative;
    top:295px;
    left:400px;
    margin-bottom: -350px;
    text-align: center;
    height: 245px;
    width: 245px;
    transform: rotateZ(45deg);
    border-radius: 8px;
    overflow:hidden;
    z-index: 120;
    background-image:
        linear-gradient(
            to right,
            var(--brown-4) 0px,
            var(--brown-4) 25px,
            var(--brown-3) 25px,
            var(--brown-3) 50px,
            var(--brown-2) 50px,
            var(--brown-2) 75px,
            var(--brown-1) 75px,
            var(--brown-1) 100px
        );
    transition: .5s linear;

}

.mountain2{
    position: relative;
    top:400px;
    left:700px;
    margin-bottom: -350px;
    height: 245px;
    width: 245px;
    transform: rotateZ(45deg);
    border-radius: 8px;
    overflow:hidden;
    z-index: 110;
    background-image:
        linear-gradient(
            to right,
            var(--brown-4) 0px,
            var(--brown-4) 25px,
            var(--brown-3) 25px,
            var(--brown-3) 50px,
            var(--brown-2) 50px,
            var(--brown-2) 75px,
            var(--brown-1) 75px,
            var(--brown-1) 100px
        );
    transition: .5s linear;

}
    
.generic,
.suns{
    width: 100%;
    height: 100%;
    background: var(--yellow-5);
    transition: .5s linear;

}
    .sun{
        position: absolute;
        top: 80%;
        left: 50%;
        width: 120px;
        height: 120px;
        margin-top: 15px;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: var(--yellow-1);
        z-index: 100;
        box-shadow:
            inset 2px 2px 6px 0px rgba(0,0,0,0.2),
            inset -2px -2px 6px 0px rgba(0,0,0,0.2);

        animation: sun 2s infinite alternate;
    }
    @keyframes sun {
        0%,80%{ transform: translateX(-50%) translateY(-50%) scale(1);}
        100%{ transform: translateX(-50%) translateY(-50%) scale(1.03);}
    }
    .sun:nth-of-type(2){
        width: 160px;
        height: 160px;
        background: var(--yellow-2);
        z-index: 90;
        animation: sun 2s infinite alternate .15s;
    }
    .sun:nth-of-type(3){
        width: 200px;
        height: 200px;
        background: var(--yellow-3);
        z-index: 80;
        animation: sun 2s infinite alternate .30s;
    }
    .sun:nth-of-type(4){
        width: 240px;
        height: 240px;
        background: var(--yellow-4);
        z-index: 70;
        animation: sun 2s infinite alternate .45s;
    }
*/