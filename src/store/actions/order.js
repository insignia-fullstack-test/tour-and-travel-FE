import OrderService from "../../services/order";
export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (params, history) => async function (dispatch) {
  try {
    const response = await OrderService.createOrder(params)
    dispatch({ type: CREATE_ORDER, payload: response.data })
    history('/my-order')
  } catch (error) {
    console.log(error)
    throw error
  }
}
