import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';

const Product = props => {
    let formattedPrice = formatPrice(props.product.price, props.product.currencyId);
    let productInstallment;

    if (!!props.product.installments) {
        const installmentPrice = props.product.price / props.product.installments;

        productInstallment = (
        <div className="installment">
            <span>or {props.product.installments} x</span>
            <b>
            {props.product.currencyFormat}
            {formatPrice(installmentPrice, props.product.currencyId)}
            </b>
        </div>
        );
    }

    return (
        <div className="shelf-item">
          {props.product.isFreeShipping && (
          <div className="shelf-stopper">Free shipping</div>)}
          <Thumb
            classes="shelf-item__thumb"
            src={props.product}
            alt={props.product.title}
          />
          <p className="shelf-item__title">{props.product.title}</p>
          <div className="shelf-item__price">
            <div className="val">
              <small>{props.product.currencyFormat}</small>
              <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
              <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
            </div>
            {productInstallment}
          </div>
          <div className="shelf-item__buy-btn">Add to cart</div>
        </div>
      );
};

export default Product;