import axios from 'axios';
// import { productsAPI } from '../util';
import Data from "../data/data.json";
//Action Types
export const LOAD_CART= 'LOAD_CART';
export const ADD_PRODUCT= 'ADD_PRODUCT';
export const REMOVE_PRODUCT= 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';



const INITIAL_STATE = {
    products:[],
    data: {
        productQuantity: 0,
        installments: 0,
        totalPrice: 0,
        currencyId: 'USD',
        currencyFormat: '$'
    },
    item: [],

};

//Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
        return {
            ...state,
            products: action.payload
        };
        case LOAD_CART:
          return {
            ...state,
            products: action.payload
          };
        case ADD_PRODUCT:
          return {
            ...state,
            productToAdd: Object.assign({}, action.payload)
          };
        case REMOVE_PRODUCT:
          return {
            ...state,
            productToRemove: Object.assign({}, action.payload)
          };
        case UPDATE_CART:
          return {
            ...state,
            data: action.payload
          };
        case UPDATE_FILTER:
          return {
            ...state,
            items: action.payload
          };
        default:
          return state;
      }
}

//Action Creators

export const loadCart = products => ({
    type: LOAD_CART,
    payload: products
});

export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    payload: product
});

export const updateCart = cartProducts => dispatch => {
    let productQuantity = cartProducts.reduce((sum, p) => {
      sum += p.quantity;
      return sum;
    }, 0);
  
    let totalPrice = cartProducts.reduce((sum, p) => {
      sum += p.price * p.quantity;
      return sum;
    }, 0);
  
    let installments = cartProducts.reduce((greater, p) => {
      greater = p.installments > greater ? p.installments : greater;
      return greater;
    }, 0);
  
    let cartTotal = {
      productQuantity,
      installments,
      totalPrice,
      currencyId: 'USD',
      currencyFormat: '$'
    };
  
    dispatch({
      type: UPDATE_CART,
      payload: cartTotal
    });
  };

  export const updateFilters = filters => ({
    type: UPDATE_FILTER,
    payload: filters
});

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

// export const fetchProducts = (filters, callback) => dispatch => {
//   return axios
//     .get(productsAPI)
//     .then(res => {
//       let { products } = res.data;

//       if (!!filters && filters.length > 0) {
//         products = products.filter(p =>
//           filters.find(f => p.availableSizes.find(size => size === f))
//         );
//       }

//       if (!!callback) {
//         callback();
//       }

//       return dispatch({
//         type: FETCH_PRODUCTS,
//         payload: products
//       });
//     })
//     .catch(err => {
//       console.log('Could not fetch products. Try again later.');
//     });
// };

export const fetchProducts = (filters, callback) => dispatch => {

      let { products } = Data.products;
      console.log({products})


      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

};

