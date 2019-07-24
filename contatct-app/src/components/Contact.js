import React, { Component } from "react";
import Form from "./Form";

export class Contact extends Component {
  state = {
    showForm: false
  };

  getStyle = () => {
    return {
      background: "#eaecec",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      borderRadius: "10px",
      margin: "10px 0px 10px 0px",
      boxShadow: "-1px 2px 4px 2px rgba(0,0,0,0.58)"
    };
  };

  upContact = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onEdit = (state, index) => {
    this.props.onEdit(state, index);
    this.setState({ showForm: false });
  };

  cancel = () => {
    this.setState({ showForm: false });
  };

  render() {
    let contact = this.props.contact;
    return (
      <div style={this.getStyle()}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgb(234, 236, 236)"
          }}
        >
          <div style={contentBox}>
            <img src={contact.picture.large} style={imgStyle} alt="avatar" />
            <div
              style={infoBox}
            >
              <p style={bcg}>
                <u style={bcg}>Name</u>: {contact.name.title}
                {". "}
                {contact.name.first} {contact.name.last}
              </p>
              <p style={bcg}>
                <u style={bcg}>Email</u>: {contact.email}
              </p>
              <p style={bcg}>
                <u style={bcg}>Phone number</u>: {contact.phone}
              </p>
            </div>
          </div>
          <button style={btnStyle} onClick={this.upContact}>
            Edit
          </button>
        </div>
        {this.state.showForm && (
          <Form
            contact={contact}
            showForm={this.state.showForm}
            onEdit={this.onEdit}
            index={this.props.index}
            cancel={this.cancel}
          />
        )}
      </div>
    );
  }
}

const infoBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  background: "rgb(234, 236, 236)",
  marginLeft: "30px"
};

const contentBox = {
  display: "flex",
  justifyContent: "space-around",
  background: "rgb(234, 236, 236)"
};

const btnStyle = {
  boxSizing: "border-box",
  background: "#4285f4",
  color: "#fff",
  border: "none",
  width: "10%",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer",
  float: "right"
};

const bcg = {
  background: "rgb(234, 236, 236)"
};

const imgStyle = {
  marginTop: "10px",
  boxSizing: "border-box",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  border: "dotted 1px #eaecec",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.58)"
};

export default Contact;
