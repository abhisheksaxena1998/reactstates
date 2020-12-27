import React, { Component } from 'react';

class Counter extends Component {
    state = 
    {   
        count:1      
    };
    styles={
        fontSize:14,
        fontWeight:"bold"
    };
    render() { 
        let classes="badge m-2 badge-"
        classes+= (this.state.count===0)?"warning":"info"
        return (  
        <React.Fragment>
            <span style={ this.styles } className="badge badge-primary m-4">{this.formatCount()}</span>
            <button className={ classes }>Increment</button>
        </React.Fragment>
        );
    }
    formatCount()
    {
        const {count}=this.state;
        return count===0 ?'Zero':count;
    }
}
 
export default Counter;