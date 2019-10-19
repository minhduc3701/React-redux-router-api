import * as Types from "../constants/ActionTypes";

let findIndex = (products, id) => {
  let result = -1;
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].id === id) {
  //     result = i;
  //     break;
  //   }
  // }
  products.forEach((product, index) => {
    if (product.id === id) result = index;
  });
  return result;
};

let initialState = [];

const products = (state = initialState, action) => {
  let index = -1;
  let { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];

    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];

    default:
      return [...state];
  }
};

export default products;
