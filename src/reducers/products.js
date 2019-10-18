import * as Types from "../constants/ActionTypes";

let initialState = [
  {
    id: 1,
    name: "Iphone 7",
    price: 450,
    status: false
  },
  {
    id: 2,
    name: "Iphone 11",
    price: 1099,
    status: true
  },
  {
    id: 3,
    name: "Iphone X",
    price: 600,
    status: true
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
