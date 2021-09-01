export const TYPES = {
  ADD_TO_ORDER: "ADD_TO_ORDER",
  REMOVE_ELEMENT_ORDER: "REMOVE_ELEMENT_ORDER",
}

export const stateInitialOrder = {
  products : [
    {id:1, title: "Hamburguesa 1", price: 4.99},
    {id:2, title: "Hamburguesa 2", price: 5.99},
    {id:3, title: "Hamburguesa 3", price: 4.99}
  ],
  orders : []
}


export function orderReducer(state, action){
  switch (action.type){
    case TYPES.ADD_TO_ORDER: {
      let productSelect = state.products.find((product) => product.id === action.payload);
      console.log(productSelect);

      return {
        ...state,
        orders : [state, productSelect],
      }
    }
    default:
      return state;
  }
}