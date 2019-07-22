import React, { Component } from "react";
import Contact from "./Contact.js";

export class Contacts extends Component {
  render() {
    // console.log(Array.isArray(this.props.contacts));
    // console.log(this.props.contacts.map(element => console.log(element)));
    return    this.props.contacts.map(res => (
          <Contact
            key={res.phone}
            contact={res}
          />
        ));
 
        // <div></div>
  }
}

export default Contacts;
