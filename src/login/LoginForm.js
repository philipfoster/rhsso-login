import React from "react";
import './Login.css'
// import Button from 'react-bootstrap/Button';
import {FormControl, InputGroup, Button} from "react-bootstrap";

export default class LoginForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div id="login-container">
          <h3>Login</h3>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Username
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="username" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon4">
                  Password
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="password" id="password" aria-describedby="basic-addon4" />
            </InputGroup>


            <Button
                id="login-btn"
                type="submit"
            >Login</Button>
          </div>
        </div>
    )
  }

  handleChange(e) {
    console.log(e)
  }
}