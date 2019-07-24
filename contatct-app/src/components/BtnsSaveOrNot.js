import React, { Component } from "react";

export default class BtnsSaveOrNot extends Component {
  state = {
    addContact: false
  };

  render() {
    return (
      <div style={btnContainer}>
        <button style={btnSave} onClick={this.props.save}>Save</button>
        <button style={btnCancel} onClick={() => this.props.cancel(this.state.addContact)}>
          Cancel
        </button>
      </div>
    );
  }
}

const btnSave = {
  boxSizing: "border-box",
  background: "#4285f4",
  color: "#fff",
  border: "none",
  width: "10%",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px"
};

const btnCancel = {
  boxSizing: "border-box",
  background: "#eb4535",
  color: "#fff",
  border: "none",
  width: "10%",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer",
  marginLeft: "10px"
};

const btnContainer = {
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "center"
}
