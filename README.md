This project is a demo of Red Hat SSO (Keycloak) authentication with ReactJS. <br />

## Available Run Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Modifying RHSSO Login Page

Full documentation for modification of the login theme is available on the product documentation page [here](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.0/html/server_developer_guide/themes). <br />
This will involve writing HTML, CSS, and JavaScript code to change the style of the elements that 
are rendered on the page. Once the theme is created, it can be copied to the RHSSO server configuration files and enabled in your realm under the "Realm Settings" -> Themes tab.


### Setting up RHSSO Client
A Client in RHSSO, is used by your application to sign in. To configure this, sign in to the RHSSO admin dashboard and switch to the realm you want to join.

Click Clients -> Create, and set an appropriate client name. Set the any relevant configuration, as described by the [documenation](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.0/html/server_administration_guide/clients),
especially "Root URL", "Valid redirect uris", "admin url", and "web origins". 

Once this is created, open `src/index.js` and modify the `initOptions` variable to point to the correct auth url, realm, and client id that you just configured.

You can either let RHSSO manage users, or delegate that responsibility to an external IdP, such as LDAP in the RHSSO admin dashboard. Once users are created, you 
can open this application in your browser and sign in.