import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default API;


//baseURL: "http://localhost:8080/api"// change to your backend URL
// baseURL: import.meta.env.BACKEND_URL, // for VITE
// baseURL: process.env.REACT_APP_BACKEND_URL //for CRA