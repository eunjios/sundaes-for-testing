import { selector } from 'recoil';
import { getScoops, getToppings } from '../api';

export const scoopsSelector = selector({
  key: 'scoopsSelector',
  get: async () => {
    return await getScoops();
  },
});

export const toppingsSelector = selector({
  key: 'toppingsSelector',
  get: async () => {
    return await getToppings();
  },
});
