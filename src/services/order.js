import API from './api';
import { showAlert } from '../lib/alerts';

const OrderService = {
  createOrder: async function (data) {
    try {
      const response = await API.post('/order/', data);
      showAlert('success', 'Order Created successfully!');
      return response;
    } catch (err) {
      showAlert('error', err.response.data.message);
      throw err;
    }
  },
}

export default OrderService;