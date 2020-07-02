import React from "react";
import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css"
// import keycloak from "../index";

export default class NavigationBar extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  render() {
    const nameDropdown = this.state.firstName + ' ' + this.state.lastName
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image
                src="logo192.png"
                width='30'
                height='30'
            />
            &nbsp; Red Hat SSO Demo
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="justify-content-end container-fluid">
              <NavDropdown id='account-dropdown' title={nameDropdown}>
                <NavDropdown.Item target="_blank" href="http://localhost:8080/auth/realms/test-app/account/">My Account</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }

  componentDidMount() {
    this.loadUserInfo()
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  loadUserInfo() {
    this.setState({
      firstName: 'Test',
      lastName: 'User'
    })
    // keycloak.loadUserProfile().then(data => {
    //   // this.pushData(data.firstName, data.lastName)
    //   this.setState({
    //     firstName: this.capitalizeName(data.firstName),
    //     lastName: this.capitalizeName(data.lastName)
    //   })
    // })
  }
}

