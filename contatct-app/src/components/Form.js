import React, { Component } from "react";
import Avatar from "./Avatar";
import BtnsSaveOrNot from "./BtnsSaveOrNot";

export default class NewContact extends Component {
  state = {
    name: {
      title: this.props.contact ? this.props.contact.name.title : "mr/mis",
      first: this.props.contact ? this.props.contact.name.first : "",
      last: this.props.contact ? this.props.contact.name.last : ""
    },
    email: this.props.contact ? this.props.contact.email : "",
    phone: this.props.contact ? this.props.contact.phone : "",
    picture: {
      large: this.props.contact ? this.props.contact.picture.large : "",
      medium: this.props.contact ? this.props.contact.picture.medium : "",
      thumbnail: this.props.contact ? this.props.contact.picture.thumbnail : ""
  }
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
    this.props.onEdit(this.state, this.props.index);
  };

  cancel = e => {
    this.props.cancel(e);
  };

  imgURL = (e) => {
    this.setState({ 
      picture: {
        large: e
      }
     })
  }

  render() {
    return (
      <div>
        <Avatar contact={this.props.contact} imgURL={this.imgURL} />
        <br />
        <hr />
        <form>
          <div style={element}>
            <div style={{ width: "100px", background: "rgb(234, 236, 236)" }}>
              Title:{" "}
            </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="title"
              placeholder="Enter title"
              value={ this.state.name.title }
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px", background: "rgb(234, 236, 236)" }}>
              First name:{" "}
            </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="first"
              placeholder="Enter first name"
              value={ this.state.name.first }
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px", background: "rgb(234, 236, 236)" }}>
              Last name:{" "}
            </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="last"
              placeholder="Enter last name"
              value={ this.state.name.last }
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px", background: "rgb(234, 236, 236)" }}>
              Email:{" "}
            </div>
            <input
              style={{ width: "200px" }}
              type="text"
              name="email"
              placeholder="Enter email"
              value={ this.state.email }
              onChange={this.onChange}
            />
          </div>
          <div style={element}>
            <div style={{ width: "100px", background: "rgb(234, 236, 236)" }}>
              Phone:{" "}
            </div>
            <input
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
