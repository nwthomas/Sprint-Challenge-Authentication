import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { JokesList } from "./components/JokesList";
import { Signup } from "./components/Signup";

class App extends Component {
  logout = e => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="App">
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/jokes">Jokes</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <button onClick={this.logout}>Logout</button>
        </div>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={JokesList} />
          <Route path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default App;
