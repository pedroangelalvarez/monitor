import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import './index.css';
import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import SocialNetwork from '../SocialNetwork';

const theme = createMuiTheme();

theme.typography.h4 = {
  fontFamily: 'Roboto',
  fontSize: '1.0rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.1rem',
  },
};

theme.typography.h5 = {
  fontFamily: 'Roboto',
  fontSize: '0.7rem',
  '@media (min-width:600px)': {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

function HomeIcon(props) {
  return (
    <SvgIcon {...props}  width="250%" height="250%" >
      
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        vectorEffect="non-scaling-stroke"/>
    </SvgIcon>
  );
}

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Cuenta</Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);


const NavigationNonAuth = () => (
    <div id="container">
  <ul>
    <li ><Link to={ROUTES.LANDING}>
        <ThemeProvider theme={theme}>
        <Typography variant="h5"><HomeIcon /></Typography>
        </ThemeProvider>
      </Link></li>
    <li><Link to={ROUTES.SIGN_IN}>
    <ThemeProvider theme={theme}>
  <Typography variant="h5">Iniciar Sesión</Typography>
</ThemeProvider>
      </Link></li>
    <li><Link to={ROUTES.ABOUT}>
    <ThemeProvider theme={theme}>
  <Typography variant="h5">Nosotros</Typography>
</ThemeProvider>
    </Link></li>
    <li><Link to={ROUTES.SUBSIDIARY}>
    <ThemeProvider theme={theme}>
  <Typography variant="h5">Sucursales</Typography>
</ThemeProvider>
    </Link></li>
    <li><Link to={ROUTES.CONTACT}>
    <ThemeProvider theme={theme}>
  <Typography variant="h5">Contacto</Typography>
</ThemeProvider>
    </Link></li>
      <li>
      <ThemeProvider theme={theme}>
        <Typography variant="h5"><SocialNetwork /></Typography>
        </ThemeProvider>
      </li>
  </ul>
  </div>
  /*
  <ul className='row' style={{ listStyleType: "none", margin: 0,  padding: 0}}>

    <li><Link to={ROUTES.LANDING}>
      <HomeIcon />
      </Link></li>

    <li><Link to={ROUTES.SIGN_IN}>
      Inicia Sesión
      </Link></li>

  </ul>
  */
);

export default Navigation;
