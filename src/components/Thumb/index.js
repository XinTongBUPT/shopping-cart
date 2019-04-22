import React from 'react';

const Thumb = (props) => {
    console.log(props.src.pictures)
    return (
        <div className={props.classes}>
            <img style={{width: "250px"}}
            src={`../../static/products/${props.src.pictures}`} 
            alt={props.src.name} />
        </div>
    )
}

export default Thumb;