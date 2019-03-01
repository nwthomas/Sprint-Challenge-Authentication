import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    });
  };
  signup = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/register", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.signup}>
        <input
          required
          autoComplete="off"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input
          required
          autoComplete="off"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <div>
          <button type="submit">Signup</button>
          <button type="button" onClick={this.clearForm}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}
