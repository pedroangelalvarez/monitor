import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/logos/logo.jpg";
import 'typeface-roboto';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

export class Header extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount(){
  
    }
  
  
    render() {
      return (
        <div>
                <div style={{ display: 'block' , width:'280px', background: 'white', marginLeft: '3.25em', marginTop: '1.363em',transformOrigin: 'left top', position: 'relative'}} id="header_logo">
                  <Link to={ROUTES.LANDING}></Link>
                  <img src={Logo} alt="Avicola Lescano - Perú" width="280" height="80">
                  </img>
                </div>
        </div>
    )}
  }
  
  export default Header;
  
