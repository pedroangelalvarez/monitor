import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { browserHistory, Router, Route } from 'react-router';

export class SocialNetwork extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }
  
  gotoInstagram(){
    
    }
  render() {
    return (
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <a href="https://es-la.facebook.com/AvicolaLescano1960" className="button">
                <FacebookIcon style={{fill: "#9F2914"}} />
          </a>
            <a href="https://www.instagram.com/Avicola.Lescano.Peru" className="button">
                <InstagramIcon style={{ fill: "#9F2914"}} />
          </a>
      </div>
  )}
}

export default SocialNetwork;
