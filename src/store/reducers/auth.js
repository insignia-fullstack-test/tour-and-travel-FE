import { LOGIN, LOGOUT, REGISTER } from '../types/index';

const initialState = {
  // local storage
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token'),
  isLoggedIn: localStorage.getItem('user') ? true : false,

  // state
  // user: {},
  // token: '',
  // isLoggedIn:  false,
}

const authReducer = (state = initialState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data,
        token: payload.data.token,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        user: {},
        token: '',
        isLoggedIn: false
      }
    case REGISTER:
      return {
        ...state,
        user: payload.data,
        token: payload.data.token,
        isLoggedIn: true
      }
    default: {
      return state
    }
  }
}

export default authReducer