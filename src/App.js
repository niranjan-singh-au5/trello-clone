import "./styles/App.css";

import React, { Component } from "react";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">React Trello Clone</div>

        <Board />
      </div>
    );
  }
}

export default App;

