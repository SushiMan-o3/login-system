import axois from 'axios';

const api = axois.create({
  baseURL: 'http://localhost:8000',
});

export default api;