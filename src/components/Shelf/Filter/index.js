import React, { Component } from 'react';
import Size from '../../CheckBoxes/index';
import "./style.css";

class SizePart extends Component {
    availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

    createCheckboxes = () => {
        return this.availableSizes.map((size, index) => < Size size={size} key={index}/> );
    }

    render(){
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {this.createCheckboxes()}
            </div>
        )
    }
}

export default SizePart;