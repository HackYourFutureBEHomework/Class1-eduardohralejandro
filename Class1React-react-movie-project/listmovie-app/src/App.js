import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Listofmovies from "./components/Listofmovies";
import Moviedata from "./listofmovies.json";

import "./App.css";

class App extends Component {
  render() {
    const movieNames = Moviedata.map((movie, index) => {
      return <Listofmovies key={index} movie={movie} />;
    });
    return (
      <div className="App">
        <Navbar />
        <Header />
        <ul>{movieNames}</ul>
      </div>
    );
  }
}

export default App;
