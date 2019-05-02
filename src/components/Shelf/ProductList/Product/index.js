import React from 'react';
import { connect } from 'react-redux';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../util';
import { addProduct } from '../../../../reducers/reducer';

const Product = ({ product, addProduct }) => {

    let formattedPrice = formatPrice(product.price, product.currencyId);
    let productInstallment;
    if (!!product.installments) {
      const installmentPrice = product.price / product.installments;

      productInstallment = (
        <div className="installment">
          <span>or {product.installments} x</span>
          <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
          </b>
        </div>
      );
    }

    product.quantity = 1;

    return (
        <div className="shelf-item">
          {product.isFreeShipping && (
          <div className="shelf-stopper">Free shipping</div>)}
          <Thumb classes="shelf-item__thumb" src={product} alt={product.title}/>
          <p className="shelf-item__title">{product.title}</p>
          <div className="shelf-item__price">
            <div className="val">
              <small>{product.currencyFormat}</small>
              <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
              <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
            </div>
            {productInstallment}
          </div>
          <div className="shelf-item__buy-btn" onClick={() => addProduct(product)}>Add to cart</div>
        </div>
      );
};

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   addProduct: PropTypes.func.isRequired
// };

export default connect(
  null,
  { addProduct }
)(Product);