import React from "react";

export class SearchContact extends React.Component {
  state = {
    title: ""
  };

  onChange=(e)=> {
      console.log('object', e.target.value)
    this.setState({title: e.target.value})
  }
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Enter name"
          value={this.state.value}
          style={{ flex: "10" }}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          style={{ flex: "1" }}
          className="btn"
        />
      </form>
    );

    //<div>{console.log(this.props.name)}</div>;
  }
}

export default SearchContact;
