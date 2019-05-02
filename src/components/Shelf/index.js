import React, { Component } from "react";
import Product from "./ProductList/Product/index";
import {products} from "./data.json";
import "./style.scss"
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = theme => ({
    shelf: {
        display: 'inline-block'
    },
  });

class Shelf extends Component {

    state = {
        value1: 'ALL',
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.checksize = this.checksize.bind(this)
    }
    
    handleChange = event => {
    this.setState({ value1: event.target.value });
    };

    checksize(products) {

        let temp = this.state.value1;
        if (temp === 'ALL') return products
        else
        return products.availableSizes.indexOf(temp) > -1

    }

    render(){

        const { classes } = this.props;
        
        return (
            <React.Fragment>
                
                    <FormControl component="fieldset" className='filterform'>
                        <FormLabel component="legend">Size</FormLabel>
                        <RadioGroup className='radio'
                        aria-label="Size"
                        name="Size"
                        value={this.state.value1}
                        onChange={this.handleChange}
                        style={{display:'inline-block'}}>
                        <FormControlLabel value="ALL" control={<Radio />} label="ALL" labelPlacement="top"/>
                        <FormControlLabel value="XS" control={<Radio />} label="XS" labelPlacement="top"/>
                        <FormControlLabel value="S" control={<Radio />} label="S" labelPlacement="top"/>
                        <FormControlLabel value="M" control={<Radio />} label="M" labelPlacement="top"/>
                        <FormControlLabel value="ML" control={<Radio />} label="ML" labelPlacement="top"/>
                        <FormControlLabel value="L" control={<Radio />} label="L" labelPlacement="top"/>
                        <FormControlLabel value="XL" control={<Radio />} label="XL" labelPlacement="top"/>
                        <FormControlLabel value="XXL" control={<Radio />} label="XXL" labelPlacement="top"/>
                        
                        </RadioGroup>
                    </FormControl>
                    
                    <div className="shelf-container">
                        {/* < ShelfHeader len={Object.keys(products).length}/>
                        < ProductList products={products}/> */}
                        <div className='list'>
                        {products.filter(this.checksize).map(product => 
                            <Product product={product}  key={product.name} />)}
                        </div>
                    </div>
               
            </React.Fragment>
        );
    }
}

// const mapStateToProps = state => ({
//     products: state.reducer.products,
//     filters: state.reducer.items,
// });
  
// export default connect(
//     mapStateToProps,
//     { fetchProducts }
// )(Shelf);

export default withStyles(styles) (Shelf);