import React, { Component } from 'react';

class Selectbox extends Component {
    
    createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

    render(){
        const { classes, options } = this.props;

        return (
            <select className={classes}>
                {this.createOptions(options)}
            </select>
        );
    }
}

export default Selectbox;