import React, { Component } from "react";
import Filter from "./Filter/index";
import ShelfHeader from "./ShelfHeader/index";
import ProductList from "./ProductList/index";
import Sort from "./Sort/index";
import "./style.css"

class Shelf extends Component {
    render(){
        return (
            <div>
                < Filter />
                <div className="shelf">
                    < Sort />
                    < ShelfHeader />
                    < ProductList />
                </div>
            </div>
        );
    }
}

export default Shelf;