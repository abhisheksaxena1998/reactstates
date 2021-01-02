import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
    /* this.state.count++; */
    this.setState({ count: this.state.count + 1 });
    console.log("Increment clicked", this);
  };

  render() {
    //let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-4">
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className={this.getBadgeClasses()}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
