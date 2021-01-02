import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  /* constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this)
    } */

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    console.log();
    /* this.state.count++; */
    this.setState({ value: this.state.value + 1 });
  };

  /*  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }; */

  render() {
    console.log("props", this.props);
    //let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className="badge badge-primary m-4">
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className={this.getBadgeClasses()}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
