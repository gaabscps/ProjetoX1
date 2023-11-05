// axios.js ou axios.ts
import axios from 'axios';

const url = 'http://34.238.170.32:8080'

const api = axios.create({
    baseURL: url
});

export default api;
