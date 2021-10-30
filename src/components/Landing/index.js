import React from 'react';
import Preview from '../Preview/index.js'
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
import FacebookIcon from '@material-ui/icons/Facebook';

import Footer from '../Footer/index.js';

/*
const Landing = () => (
  <div>
  </div>
);*/


export class Landing extends React.Component {
  constructor(props) {
    super(props);
    let wHeight = window.innerHeight;
    window.scrollY = 1;
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{position: "relative"}}>
        <div id ="logo" style={{position: "absolute",top: "50%", left: "40%", marginLeft: "60px", marginTop: "105px"}}>
          <img src="logo.png" height="80" width="210"/>
        </div>
        <div id ="form" style={{position: "absolute",top: "70%", left: "40%", marginLeft: "60px", marginTop: "250px"}}>
          <form onSubmit={this.handleSubmit}>
            <label>
              ODBC
              <input
                name="ODBC"
                type="text"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Usuario
              <input
                name="ODBC"
                type="text"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Contraseña
              <input
                name="numberOfGuests"
                type="password"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Acceder" />
          </form>
        </div>
      </div>
  )}
}
/*
constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.message = this.message.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  name(event){
    this.setState({name : event.target.value})
  }
  email(event){
      this.setState({email : event.target.value})
  }
  message(event){
      this.setState({message : event.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const packets = {
      name:  this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
    axios.post('/contactanos', packets).then(
        response => alert(JSON.stringify(response.data))
        ).then(this.resetForm())
    .catch(error => {
        console.log("ERROR:: ",error.response.data);
        });
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
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
                <div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                      <label htmlFor="name">Nombre</label>
                      <input type="text" placeholder="Name" onChange={this.name} class="input"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Correo</label>
                      <input type="email" placeholder="Email" onChange={this.email} class="input" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Mensaje</label>
                      <textarea  placeholder="Message" onChange={this.message}  rows="5"></textarea>
                  </div>
                  <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Enviar</button>
                </form>
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
*/
export default Landing;
