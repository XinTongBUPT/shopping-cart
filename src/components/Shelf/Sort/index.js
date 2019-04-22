import React, { Component } from "react";
import Selectbox from "../../SelectBox/index";
import "./style.css";

const sortBy = [
    { value: '', label: 'Select' },
    { value: 'lowestprice', label: 'Lowest to highest' },
    { value: 'highestprice', label: 'Highest to lowest' }
  ];

class Sort extends Component {

    render () {
        return (
            <div className="sort">
                Order by &ensp;
                <Selectbox options={sortBy} />
            </div>
        );
    }
}

export default Sort;