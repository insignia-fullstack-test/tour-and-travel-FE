import { FETCH_PRODUCTS } from "../actions/travelPackage";

const initialState = {
  products: [],
};

const travelPackageReducer = (state = initialState, action) => {

  const { type, payload } = action

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    default: {
      return state
    }
  }
}

export default travelPackageReducer;