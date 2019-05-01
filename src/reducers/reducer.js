import axios from 'axios';

//Action Types
// export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const LOAD_CART= 'LOAD_CART';
export const ADD_PRODUCT= 'ADD_PRODUCT';
export const REMOVE_PRODUCT= 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_FILTER = 'UPDATE_FILTER';



const INITIAL_STATE = {
    products:[
        {
          id: 12,
          sku: 12064273040195392,
          title: "Cat Tee Black T-Shirt",
          description: "4 MSL",
          availableSizes: ["S", "XS"],
          style: "Black with custom print",
          price: 10.9,
          installments: 9,
          currencyId: "USD",
          currencyFormat: "$",
          isFreeShipping: true
        },
    ],
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
        // case FETCH_PRODUCTS:
        // return {
        //     ...state,
        //     products: action.payload
        // };
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

// export const toggle_modal = (id) => {
//     return (dispatch) => {
//         dispatch({
//             type: TOGGLE_MODAL,
//             payload: id
//         })
//     };
// }