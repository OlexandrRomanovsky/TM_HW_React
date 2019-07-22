import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import SearchContact from "./components/SearchContact";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10&inc=name,phone,email")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data.results });
        // console.log(this.state)
      })
      .catch(err => alert(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <hr />
        <SearchContact name={this.state.contacts} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
