import React from "react";
import keycloak from "../index";
import {Button, FormControl, InputGroup} from "react-bootstrap";

const eventbus = require('hertzy')

const chan = eventbus.tune("list")

export default class WriteSection extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      canWrite: false
    }
  }


  render() {

    return (
        <div className={this.state.canWrite ? "write-container" : "hidden"}>

          <InputGroup className="mb-3">
            <FormControl
                id="input-box"
                placeholder="Enter a new note"
                aria-label="Enter a new note"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.onButtonClick}>Add item</Button>
            </InputGroup.Append>
          </InputGroup>

        </div>
    )

  }

  onButtonClick() {
    // console.log("click")
    const input = document.getElementById("input-box").value

    const payload = [
        input
    ]

    const http = new XMLHttpRequest()
    const url = "http://localhost:3001/items"
    http.open("POST", url)
    http.setRequestHeader("Content-Type", "application/json")
    http.setRequestHeader('Authorization', `Bearer ${keycloak.token}`)
    http.send(JSON.stringify(payload))

    http.onreadystatechange = () => {
      if (http.status === 200) {
        chan.emit('list:add')
      } else {
        console.log("Failed to publish item ")
      }
    }

  }


  componentDidMount() {
    const http = new XMLHttpRequest();
    const url = "http://localhost:3001/items/canpost"
    http.open("GET", url);
    http.setRequestHeader('Authorization', `Bearer ${keycloak.token}`)
    http.send();

    http.onreadystatechange = () => {
      console.log("done")

      if (http.status === 200) {
        this.setState({
          canWrite: true
        })
      }

    }

  }

}