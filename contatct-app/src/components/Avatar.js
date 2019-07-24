import React, { Component } from "react";

export default class Avatar extends Component {
  state = {
    imgURL: this.props.contact ? this.props.contact.picture.large : "https://image.flaticon.com/icons/png/512/44/44948.png"
  };

  componentDidMount = () => {
    this.props.imgURL(this.state.imgURL);
  }

  ImgChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = e => {
        this.setState({ imgURL: e.target.result });
        this.props.imgURL(this.state.imgURL);
      };
    }
  };

  render() {
    return (
      <div style={boxAvatar}>
        <img src={this.state.imgURL} style={imgStyle} alt="avatar" />
        <br />
        <input style={btnAvatar} type="file" onChange={this.ImgChange} />
      </div>
    );
  }
}

const imgStyle = {
  marginTop: "10px",
  boxSizing: "border-box",
  borderRadius: "50%",
  width: "180px",
  height: "180px",
  border: "dotted 1px #eaecec",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.58)"
};

const btnAvatar = {
  boxSizing: "border-box",
  background: "#4285f4",
  color: "#fff",
  border: "none",
  width: "17%",
  padding: "10px",
  borderRadius: "6px",
  cursor: "pointer"
};

const boxAvatar = {
  textAlign: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
