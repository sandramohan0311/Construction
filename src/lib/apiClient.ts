import axios from 'axios';
import { API_URL } from '@/utils/constant';

const apiClient = axios.create({
  baseURL: API_URL,
  // No default Content-Type — handled per request
});

// Add a request interceptor to attach token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
