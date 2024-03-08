import axios, { AxiosResponse } from 'axios';
import { Scoop, Topping } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export const getScoops = async () => {
  const response: AxiosResponse<Scoop[]> = await api.get('/scoops');
  return response.data;
};

export const getToppings = async () => {
  const response: AxiosResponse<Topping[]> = await api.get('/toppings');
  return response.data;
};
