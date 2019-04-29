import React from 'react';

const Thumb = (props) => {
    console.log(props.src.sku)
    return (
        <div className={props.classes}>
            <img style={{width: "250px"}}
            src={`../../static/products/${props.src.sku}_1.jpg`} 
            alt={props.src.name} />
        </div>
    )
}

export default Thumb;