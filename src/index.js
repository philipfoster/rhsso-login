import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// export default keycloak

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(, document.getElementById('root'));



// ReactDOM.render(
//     <KeycloakProvider keycloak={keycloak} initConfig={config}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </KeycloakProvider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
