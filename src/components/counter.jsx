import React, { Component } from "react";

class Counter extends Component {
  /* state = {
    value: this.props.counter.value,
  }; */

  /* constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this)
    } */

  styles = {
    fontSize: 14,
    fontWeight: "bold",
  };

  buttonStyle = {
    height: 25,
  };

  /* handleIncrement = () => {
    console.log();
    this.setState({ value: this.state.value + 1 });
  }; */

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
          style={this.buttonStyle}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getBadgeClasses()}
        >
          Increment Quantity
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
