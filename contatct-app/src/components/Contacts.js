import React, { Component } from "react";
import Contact from "./Contact.js";

export class Contacts extends Component {
  state = {
    switchToNewContact: true
  };

  render() {
    let contacts = this.props.contacts;
    let searchedWord = this.props.searchedWord;
    let filtered = contacts.filter(res => {
      return (
        res.name.first.includes(searchedWord) ||
        res.name.last.includes(searchedWord) ||
        res.email.includes(searchedWord) ||
        res.phone.includes(searchedWord)
      );
    });

    return (
      <div>
        {filtered.map((res, index) => (
          <Contact key={res.phone} contact={res} index={index} onEdit={this.props.onEdit}/>
        ))}
        <button
          style={addCon}
          onClick={() => this.props.addContact(this.state.switchToNewContact)}
        >
          Add
        </button>
      </div>
    );
  }
}

const addCon = {
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  float: "right",
  background: "#4285f4",
  fontSize: "20px",
  margin: "30px 10px 30px 30px",
  textAlign: "center"
};

export default Contacts;
