import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://104.248.26.141:3000/api',
});

export default instance;
