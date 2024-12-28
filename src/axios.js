import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ecom-backend-mn13.onrender.com/api/ecom/v1',
  withCredentials: true, 
});

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear any existing auth state if you're using local/session storage
      localStorage.removeItem('user');
      // Redirect to login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;