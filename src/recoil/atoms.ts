import { atom } from 'recoil';
import { fetchedScoops, fetchedToppings } from './selectors';

export const scoopsAtom = atom({
  key: 'scoopsAtom',
  default: fetchedScoops,
});

export const toppingsAtom = atom({
  key: 'toppingsAtom',
  default: fetchedToppings,
});
