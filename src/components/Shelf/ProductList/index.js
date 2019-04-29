import React from 'react';

import Product from './Product';

// import Data from "../../../data/data.json";
// import "./style.css"

const ProductList = (props) => {
    const renderedList = props.data.products.map(product => {
        return <Product product={product} key={product.name} />
    }
);   

    return (
    <div className="image-list">{renderedList}</div>
    );
}

export default ProductList;
