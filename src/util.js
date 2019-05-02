export const formatPrice = (x, currency) => {
    switch (currency) {
      case 'BRL':
        return x.toFixed(2).replace('.', ',');
      default:
        return x.toFixed(2);
    }
  };
  
  // export const productsAPI = "../../../data/data.json";
    // 'https://react-shopping-cart-67954.firebaseio.com/products.json';

    export const productsAPI ='https://firebasestorage.googleapis.com/v0/b/shopcart-f4307.appspot.com/o/products.json?alt=media&token=0aef2286-5db9-457d-b198-dcbde81c0f6e'
  // export const productsAPI = "http://localhost:8001/api/products";
  