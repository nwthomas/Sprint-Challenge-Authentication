import React, { Component } from "react";
import axios from "axios";

export default class JokesList extends Component {
  state = {
    jokes: []
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const reqOptions = { headers: { authorization: token } };
      axios
        .get("http://localhost:3300/api/jokes", reqOptions)
        .then(res => {
          this.setState({
            ...this.state,
            jokes: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <h1>Jokes List</h1>
        {this.state.jokes.length ? (
          this.state.jokes.map((joke, index) => {
            return <p key={index}>{joke.joke}</p>;
          })
        ) : (
          <p>Please login to view jokes</p>
        )}
      </div>
    );
  }
}
