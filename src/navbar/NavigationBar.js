import React from "react";
import {Image, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import keycloak from "../index";


export default class NavigationBar extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }


  render() {
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
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a>{this.state.firstName} {this.state.lastName}</a>
            </Navbar.Text>
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
    keycloak.loadUserProfile().then(data => {
      // this.pushData(data.firstName, data.lastName)
      this.setState({
        firstName: this.capitalizeName(data.firstName),
        lastName: this.capitalizeName(data.lastName)
      })
    })
  }
}