import React from "react";

export class SearchContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onChange = e => {
    // console.log('object', e.target.value)
    this.setState({ title: e.target.value });
    // console.log('object', this.state.title)
    this.props.searchEle(this.state.title);
  };

    //If using button for submitting
//   onSubmit = e => {
//     e.preventDefault();
//     // console.log('object', this.state.title);
//     // console.log(this.props.name);
//     this.props.searchEle(this.state.title);
//     this.setState({ title: "" });
//   };

  render() {
    return (
      // <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter searched info"
          value={this.state.title}
          // style={{ flex: "10" }}
          style={inp}
          onChange={this.onChange.bind(this)}
        />
    //     <input
    //       type="submit"
    //       value="Search"
    //       style={{ flex: "1" }}
    //       className="btn"
    //     />
    //   </form>
    );
  }
}

const inp = {
    color: "black",
    width: "100%",
    fontSize: "20px"
  };

export default SearchContact;
