import { selector } from 'recoil';
import { getScoops, getToppings } from '../api';
import { scoopsAtom, toppingsAtom } from './atoms';

export const fetchedScoops = selector({
  key: 'fetchedScoops',
  get: async () => {
    return await getScoops();
  },
});

export const fetchedToppings = selector({
  key: 'fetchedToppings',
  get: async () => {
    return await getToppings();
  },
});

export const selectedScoops = selector({
  key: 'selectedScoops',
  get: ({ get }) => {
    const scoops = get(scoopsAtom);
    return scoops.filter((scoop) => scoop.count > 0);
  },
});

export const selectedToppings = selector({
  key: 'selectedToppings',
  get: ({ get }) => {
    const toppings = get(toppingsAtom);
    return toppings.filter((topping) => topping.selected);
  },
});

export const totalScoops = selector({
  key: 'totalScoops',
  get: ({ get }) => {
    const scoops = get(scoopsAtom);
    return (
      scoops.reduce((acc, cur) => {
        return acc + cur.count;
      }, 0) * 2
    );
  },
});

export const totalToppings = selector({
  key: 'totalToppings',
  get: ({ get }) => {
    const toppings = get(toppingsAtom);
    return (
      toppings.reduce((acc, cur) => (cur.selected ? acc + 1 : acc), 0) * 1.5
    );
  },
});

export const totalAll = selector({
  key: 'totalAll',
  get: ({ get }) => {
    const ScoopsAmount = get(totalScoops);
    const toppingsAmount = get(totalToppings);
    return ScoopsAmount + toppingsAmount;
  },
});
