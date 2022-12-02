import travelPackageService from "../../services/travelPackageService";
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => async function (dispatch) {
  try {
    const response = await travelPackageService.fetchProducts();

    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    return response.data;

  } catch (error) {
    throw error
  }
}