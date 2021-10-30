import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import About from '../About';
import Contact from '../Contact';
import SignInPage from '../SignIn';
import Subsidiary from '../Subsidiary';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Header from '../Header';
//Añadir más páginas
import * as ROUTES from '../../constants/routes';
//import { withAuthentication } from '../Session';

const horizontalSeparados = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const horizontalJuntos = {
  display: 'flex',
  margin: '0px !important',
  justifyContent: 'none !important',
  alignSelf: 'flex-end !important'
};

const App = () => (
  <Router>
    <div>
      <div  style={horizontalSeparados}>
      <Header/>
      <Navigation />
      </div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SUBSIDIARY} component={Subsidiary} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      
    </div>
  </Router>
);

export default App;
