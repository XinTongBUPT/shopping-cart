import React, { Component } from "react";
import Thumb from "../../../Thumb/index";

const Product = props => {
        return (
            <div className="shelf-item">
                <div className="shelf-stopper">Free shipping</div>
                <Thumb 
                    classes="shelf-item__thumb"
                    src={props.product}
                />
                <p className="shelf-item__title">product</p>
                <div className="shelf-item__price">
                    productInstallment  
                </div>
                <div className="shelf-item__buy-btn">Add to cart</div>
            </div>
        );
    }

export default Product;