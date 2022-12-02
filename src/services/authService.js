import API from './api';
import { showAlert } from '../lib/alerts';

const AuthService = {
  login: async function (data) {
    try {
      const response = await API.post('/auth/login', data);
      console.log(response.data.data)
      setHeadersAndStorage(response.data.data);
      showAlert('success', 'Logged in successfully!');
      return response;
    } catch (err) {
      showAlert('error', err.response.data.message);
      console.log('Auth service error', err);
      throw err;
    }
  },

  logout: () => {
    API.defaults.headers['Authorization'] = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

}

const setHeadersAndStorage = ({ user, token }) => {
  console.log(token)
  API.defaults.headers['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
}

export default AuthService;