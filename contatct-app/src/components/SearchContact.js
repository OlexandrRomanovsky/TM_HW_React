import React from "react";

export class SearchContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onChange = e => {
    this.setState({ title: e.target.value }, () => {
      this.props.searchedEle(this.state.title);
    });
  };

  render() {
    return (
        <input
          type="text"
          name="title"
          placeholder="Enter searched info"
          value={this.state.title}
          style={inp}
          onChange={this.onChange}
        />
    );
  }
}

const inp = {
    color: "black",
    width: "100%",
    fontSize: "20px"
  };

export default SearchContact;
