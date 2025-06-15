import axios from 'axios';

const baseURL = 'https://your-api-base-url.com/api'; // Change to your actual API base URL

const api = axios.create({
  baseURL,
  // You can add more default config here (headers, timeout, etc.)
});

export { api}; 