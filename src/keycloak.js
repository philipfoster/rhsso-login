import Keycloak from 'keycloak-js'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak('./resources/keycloak.json')

//Initialization of the keycloak instance
keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {

  if (!authenticated) {
    window.location.reload();
  } else {
    console.info("Authenticated");
  }
}

export default keycloak