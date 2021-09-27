import axios from 'axios';

const defaultConfig = {
  baseURL: 'http://dummy-url.com',
};

export const api = axios.create(defaultConfig);
