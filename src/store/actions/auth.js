import AuthService from "../../services/authService";
import { LOGIN, LOGOUT, REGISTER } from '../types/index';

export const login = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.login(params)
    dispatch({ type: LOGIN, payload: response.data })
    history('/')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const logout = (params, history) => async function (dispatch) {
  try {
    AuthService.logout(params)
    dispatch({ type: LOGOUT })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const register = (params, history) => async function (dispatch) {
  try {
    const response = await AuthService.register(params, history)
    dispatch({ type: REGISTER, payload: response.data })
  } catch (error) {
    console.log(error)
    throw error
  }
}
