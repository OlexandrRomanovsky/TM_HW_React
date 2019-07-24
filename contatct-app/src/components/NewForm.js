import React, { Component } from "react";
import BtnsSaveOrNot from "./BtnsSaveOrNot";

export default class NewForm extends Component {
  state = {
    name: {
      title: "mr./mis",
      first: "",
      last: ""
    },
    email: "",
    phone: ""
  };

  onChange = e => {
    const update = {
      [e.target.name]: e.target.value
    };

    if (["title", "first", "last"].includes(e.target.name)) {
      this.setState({
        name: {
          ...this.state.name,
          ...update
        }
      });
    } else {
      this.setState(update);
    }
  };

  save = () => {
    this.props.save(this.state);
  };

  cancel = e => {
    this.props.cancel(e);
  };
  render() {
    return (
      <div>
        <form>
          <div style={element}>
            <div style={{ width: "100px" }}>Title: </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="title"
              placeholder="Enter title"
              value={this.state.name.title }
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px" }}>First name: </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="first"
              placeholder="Enter first name"
              value={this.state.name.first}
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px" }}>Last name: </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="last"
              placeholder="Enter last name"
              value={this.state.name.last}
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px" }}>Email: </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div htmlFor="phone" style={{ width: "100px" }}>
              Phone:{" "}
            </div>
            <input
              id="phone"
              style={{ width: "200px" }}
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
        </form>
        <BtnsSaveOrNot cancel={this.cancel} save={this.save} />
      </div>
    );
  }
}

const element = {
  display: "flex",
  background: "#eaecec",
  padding: "10px",
  borderBottom: "1px #ccc solid",
  borderRadius: "10px",
  margin: "10px 0px 10px 0px",
  boxShadow: "-1px 2px 4px 2px rgba(0,0,0,0.58)"
};
