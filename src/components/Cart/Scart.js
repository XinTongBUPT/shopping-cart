import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Thumb from '../Thumb';
import { formatPrice } from '../../util';

class Scart extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };
  state = {
    isMouseOver: false
  };
  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };
  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  render() {
    const { product, removeProduct } = this.props;

    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <img
          classes="shelf-item__thumb"
          style={{width: "50px"}}
          src={require(`../../static/products/${product.sku}_2.jpg`)}
          alt={product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            {`${product.availableSizes[0]} | ${product.style}`} <br />
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
        </div>
      </div>
    );
  }
}

export default Scart;
