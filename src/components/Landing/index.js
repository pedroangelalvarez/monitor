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
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom';

import Footer from '../Footer/index.js';

import './index.css';

/*
const Landing = () => (
  <div>
  </div>
);*/


export class Landing extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      connect: '',
      user: '',
      pass: ''
    }
    this.connect = this.connect.bind(this);
    this.user = this.user.bind(this);
    this.pass = this.pass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  connect(event){
    this.setState({connect : event.target.value})
  }
  user(event){
      this.setState({user : event.target.value})
  }
  pass(event){
      this.setState({pass : event.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const packets = {
      connect:  this.state.connect,
      user: this.state.user,
      pass: this.state.pass
    };
    

    if (this.state.connect === "LOCALHOST"){
       //export default withRouter(Footer);
    }
  }


  resetForm(){
    this.setState({connect: '', user: '', pass: ''})
  }

  onConnectChange(event) {
	  this.setState({connect: event.target.value})
  }

  onUserChange(event) {
	  this.setState({user: event.target.value})
  }

  onPassChange(event) {
	  this.setState({pass: event.target.value})
  }

  render() {
    return (
      <div class="principal">
      <div class="container">
        <div class="Logo">
          <img src="logo.png" height="80" width="210"/>
        </div>
        <div class="formulario">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <label>ODBC</label>
            <div class="inputConnect">
              <input
                  width="100px"
                  name="connect"
                  type="text"
                  class="input"
                  onChange={this.connect} />
            </div>
            <br />
            <div class="user">
              <label>Usuario</label>
            </div>
            <div class="inputUser">
              <input
                width="100px"
                name="user"
                type="text"
                class="input"
                onChange={this.user} />
            </div>
            <br />
            <div class="pass">
              <label>Contraseña</label>
            </div>
            <div class="inputUser">
              <input
                width="100px"
                name="pass"
                type="password"
                class="input"
                onChange={this.pass} />
            </div>
            <br /><br />
            <button type="submit" style={{margin: "auto"}} onClick={this.handleSubmit} className="btn btn-primary">Acceder</button>
          </form>
        </div>
      </div>
     </div>

  )}
}

export default Landing;
