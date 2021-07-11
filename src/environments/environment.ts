import domain from '../../auth_config.json';
import clientId from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain:"dev-pe43oiv7.us.auth0.com",
    clientId:"Jv3FOdgaHTQhICeRxnrZJ8fJxpIcOicH",
    redirectUri: window.location.origin,
  },
};