import React, { Component } from "react";
import Contact from "./Contact.js";

export class Contacts extends Component {
  render() {
    // console.log(Array.isArray(this.props.contacts));
    // console.log(this.props.contacts.map(element => console.log(element)));
    // console.log(this.props.searchedWord);
    // console.log(this.props.contacts);
    let contacts = this.props.contacts;
    let searchedWord = this.props.searchedWord;
    // // console.log('contacts', contacts);
    // let contactsAsOneObj = contacts.map(res => {
        // let obj = {};
        // let personsName = Object.assign({}, res.name);
        // //console.log(name);
        // let personsEmail = {};
        // personsEmail.email = res.email;
        // // console.log(personsEmail);
        // let personsPhone = {};
        // personsPhone.phone = res.phone;
        // // console.log(personsPhone);
        // let contact = Object.assign({}, personsName, personsEmail, personsPhone);
        // // console.log(contact);

        //another method
        // obj.title=personsName.title;
        // obj.first=personsName.first;
        // obj.last=personsName.last;
        // obj.email=res.email;
        // obj.phone=res.phone;
        // return obj;
    // });
    // console.log('contactsAsOneObj', contactsAsOneObj);
    let filtered = contacts.filter(res => {
      // console.log('res', res)
      // console.log('res.last', res.last)

      return res.name.first.includes(searchedWord) || res.name.last.includes(searchedWord) || res.email.includes(searchedWord) || res.phone.includes(searchedWord);

    //   if (res.name.first.includes(searchedWord)) {
    //       return res.name.first.includes(searchedWord)
    //   } else if (res.name.last.includes(searchedWord)) {
    //       return res.name.last.includes(searchedWord)
    //   } else if (res.email.includes(searchedWord)) {
    //       return res.email.includes(searchedWord)
    //   } else if (res.phone.includes(searchedWord)) {
    //       return res.phone.includes(searchedWord)
    //   }
    });
    return filtered.map(res => <Contact key={res.phone} contact={res} />);
  }
}

export default Contacts;
