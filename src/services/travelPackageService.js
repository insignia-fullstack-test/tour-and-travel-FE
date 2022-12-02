import API from './api';
import { showAlert } from '../lib/alerts';

const travelPackageService = {
  fetchProducts: async () => {
    try {
      const response = await API.get('/products/');
      return response;
    } catch (err) {
      throw err;
    }
  },
}

export default travelPackageService;