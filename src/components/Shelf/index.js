import React, { Component } from "react";
import Filter from "./Filter/index";
import ShelfHeader from "./ShelfHeader/index";
import ProductList from "./ProductList/index";
import Sort from "./Sort/index";
import Data from "./data.json";
import "./style.scss"

class Shelf extends Component {

    constructor(props) {
        super(props);
    };

    render(){
        return (
            <React.Fragment>
                < Filter />
                <div className="shelf-container">
                    < Sort />
                    < ShelfHeader len={Object.keys(Data.products).length}/>
                    < ProductList data={Data}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Shelf;