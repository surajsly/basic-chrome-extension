import React from "react";
import logo from "./logo.svg";
import "./App.css";

/*
data = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");
 */
class App extends React.Component {
  state = {
    curTime: null,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.curTime}</p>
        </header>
      </div>
    );
  }
}

export default App;
