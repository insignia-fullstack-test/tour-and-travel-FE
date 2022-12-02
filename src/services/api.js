import axios from 'axios';
import store from '../store';
import { logout } from '../store/actions/auth';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
  }
})

API.interceptors.response.use(
  res => {
    return res
  },
  err => {
    if (err.response.status !== 401) {
      throw err
    }

    if (typeof err.response.data.error.name !== 'undefined') {
      if ( err.response.data.error.name === 'TokenExpiredError') {
        store.dispatch(logout());
        throw err
      }
    }
  }
)

export default API;