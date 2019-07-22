import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import SearchContact from "./components/SearchContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchedWord: ""
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10&inc=name,phone,email")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data.results });
        // console.log(this.state)
      })
      .catch(err => alert(err));
  }

  searchEle = (e) => {
    // console.log(e);
    this.setState({searchedWord: e});
    // somehow don't show
    // console.log(this.state.searchedWord);
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Contacts</h1>
        <hr />
        <SearchContact name={this.state.contacts} searchEle={this.searchEle} />
        <Contacts contacts={this.state.contacts} searchedWord={this.state.searchedWord} />
      </div>
    );
  }
}

export default App;
