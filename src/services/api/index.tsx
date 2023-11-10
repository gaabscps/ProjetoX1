// axios.js ou axios.ts
import axios from 'axios';

const url = 'http://44.199.70.98:8080'

const api = axios.create({
    baseURL: url
});

export default api;
