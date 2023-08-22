import axios from "axios";

const instance = axios.create({
  
  // baseURL: 'http://localhost:8990/',

  baseURL: 'https://amazone-backend.onrender.com'

    
});

export default instance;
