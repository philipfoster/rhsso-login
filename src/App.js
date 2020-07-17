import React from 'react';
import './App.css';
import NavigationBar from "./navbar/NavigationBar";
import ListSection from "./ListSection/ListSection";
import WriteSection from "./WriteSection/WriteSection";

export default class App extends React.Component {

  constructor(params) {
    super(params);
    this.state = {
      canWrite: false
    }
  }

  render() {
    return (
        <div className="App">
          <NavigationBar/>

          <div id="content">
            <ListSection />
            <WriteSection />
          </div>
        </div>
    )
  }

}