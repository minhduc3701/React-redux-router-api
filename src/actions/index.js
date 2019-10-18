import * as Types from "../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  };
};
export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi("products", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actADDProduct = products => {
  return {
    type: Types.ADD_PRODUCT,
    products
  };
};
export const actUpdateProduct = products => {
  return {
    type: Types.UPDATE_PRODUCT,
    products
  };
};
export const actDeleteProduct = products => {
  return {
    type: Types.DELETE_PRODUCT,
    products
  };
};
