// axios.js ou axios.ts
import axios from 'axios';

const url = 'https://api.playx1.gg'

const api = axios.create({
    baseURL: url
});

export default api;
