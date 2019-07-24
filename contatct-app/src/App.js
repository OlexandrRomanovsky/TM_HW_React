import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import SearchContact from "./components/SearchContact";
import Spinner from "./components/Spinner";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchedWord: "",
      loading: false,
      switchToNewContacts: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://randomuser.me/api?results=10&inc=name,phone,email,picture")
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data.results });
      })
      .then(() => this.setState({ loading: false }))
      .catch(err => alert(err));
  }

  searchedEle = e => {
    this.setState({ searchedWord: e });
  };

  addContact = e => {
    this.setState({ switchToNewContacts: e });
  };

  save = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
      switchToNewContacts: false
    });
  };

  cancel = e => {
    this.setState({ switchToNewContacts: e });
  };

  onEdit = (contact, i) => {
    const contacts = [...this.state.contacts];
    contacts[i] = contact;
    this.setState({contacts});
  }

  render() {
    const {
      switchToNewContacts,
      loading,
      contacts,
      searchedWord
    } = this.state;

    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Contacts</h1>
        <hr />
        {!switchToNewContacts && (
          <SearchContact name={contacts} searchedEle={this.searchedEle} />
        )}
        {loading && <Spinner />}
        {!switchToNewContacts && (
          <Contacts
            contacts={contacts}
            searchedWord={searchedWord}
            addContact={this.addContact}
            upContact={this.upContact}
            onEdit = {this.onEdit}
          />
        )}
        {switchToNewContacts && (
          <Form
            onEdit={this.save}
            cancel={this.cancel}
          />
        )}
      </div>
    );
  }
}

export default App;
