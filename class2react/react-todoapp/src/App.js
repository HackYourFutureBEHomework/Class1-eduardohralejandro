import React, { Component } from "react";
import "./App.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Header from "./components/Header.js";
import Newtodo from "./components/Newtodo.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Newtodo />
      </div>
    );
  }
}

export default App;
