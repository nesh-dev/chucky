import axios from 'axios'; 

export const server = axios.create({
    timeout: 5000,
    baseURL: process.env.REACT_APP_CHUCK_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });