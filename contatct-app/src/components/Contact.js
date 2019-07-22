import React, { Component } from "react";

export class Contact extends Component {
  getStyle = () => {
    return {
      background: "#eaecec",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      borderRadius: "10px",
      margin: "10px 0px 10px 0px",
      boxShadow: "-1px 2px 4px 2px rgba(0,0,0,0.58)"
      //   textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    // console.log(this.props.contact)
    return (
      <div style={this.getStyle()}>
        <p style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          {this.props.contact.name.title}
          {". "}
          {this.props.contact.name.first} {this.props.contact.name.last}
          <button style={btnStyle}>Info</button>
        </p>
      </div>
    );
  }
}

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

export default Contact;
