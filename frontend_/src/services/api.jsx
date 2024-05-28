import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // This will be proxied to http://localhost:5000/api
});

export const fetchMessage = () => api.get('/message'); // Example endpoint

export default api;
