import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListSection.css'
import keycloak from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const eventbus = require('hertzy')

const chan = eventbus.tune("list")


export default class ListSection extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      userHasAccess: false,
      isLoading: true,
      listItems: []
    }
  }

  render() {

    let messageText = "";
    let messageClass = "";
    if (this.state.isLoading) {
      messageText = "The list is loading";
    } else if (!this.state.userHasAccess) {
      messageText = "Sorry, you don't have access.";
    } else if (this.state.userHasAccess && this.state.listItems.length === 0) {
      messageText = "There are no items to display"
    } else {
      messageClass = "hidden";
    }
    console.log("render")

    return (
        <div className="list-section">
          <h3>Super secret shared list</h3>
          <p className={messageClass}>{messageText}</p>

          <ListGroup>
            {this.state.listItems.map((item, i) => {
              return (
                  <ListGroup.Item key={i}>{i+1}. &nbsp; {item}</ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
    )
  }


  componentDidMount() {
    console.log("Loading items...")
    this.loadData()

    chan.on('list:add', () => {
      console.log("recvd update");
      this.loadData()
    });

  }

  loadData() {
    const http = new XMLHttpRequest();
    const url = "http://localhost:3001/items"
    http.open("GET", url);
    // http.setRequestHeader("Access-Control-Allow-Origin": "*")
    http.setRequestHeader('Authorization', `Bearer ${keycloak.token}`)
    http.send();

    http.onreadystatechange = () => {
      if (http.status === 200  && http.responseText !== "") {
        this.setState({
          listItems: JSON.parse(http.responseText),
          userHasAccess: true,
          isLoading: false
        })
        console.log(this.state.listItems)

      } else if (http.status === 403) {
        console.log("authz error");
        this.setState({
          listItems: [],
          userHasAccess: false,
          isLoading: false
        })
      } else {
        console.log("request failed")
      }
    }


  }

}
