import axios, {AxiosInstance} from 'axios';

import {ProductsRes} from './models';

const API_URL = "http://192.168.1.148:3000/";

class APIhandler {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });
  }

  getAllProducts = async (): Promise<ProductsRes[]> => {
    try {
      const response = await this.axios.get<ProductsRes[]>(
        'products'
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

const API = new APIhandler();
export default API;