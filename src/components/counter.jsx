import React, { Component } from 'react';

class Counter extends Component {
    state = 
    {   
        count:0,
        tags: ['tag1','tag2','tag3']  
    };
    styles={
        fontSize:14,
        fontWeight:"bold"
    };
    render() { 
        let classes = this.getBadgeClasses();
        return (  
        <React.Fragment>
            <span style={ this.styles } className="badge badge-primary m-4">{this.formatCount()}</span>
            <button className={ this.getBadgeClasses() }>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
            </ul>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "info";
        return classes;
    }

    formatCount()
    {
        const {count}=this.state;
        return count===0 ?'Zero':count;
    }
}
 
export default Counter;