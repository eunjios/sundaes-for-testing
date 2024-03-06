import { useState } from 'react';
import { initialScoops, initialToppings } from '../data';
import { Scoop, Topping } from '../types';

const useOrderData = () => {
  const [scoops, setScoops] = useState(initialScoops);
  const [toppings, setToppings] = useState(initialToppings);

  const selectedScoops = scoops.filter((scoop) => scoop.count > 0);

  const selectedToppings = toppings.filter((topping) => topping.selected);

  const totalScoops =
    scoops.reduce((acc, cur) => {
      return acc + cur.count;
    }, 0) * 2;

  const totalToppings =
    toppings.reduce((acc, cur) => (cur.selected ? acc + 1 : acc), 0) * 1.5;

  const resetOrder = () => {
    setScoops(initialScoops);
    setToppings(initialToppings);
  };

  const changeScoopsHandler = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newCount = Number(event.target.value);
    setScoops((prevScoops) =>
      prevScoops.map((scoop) =>
        scoop.id === id ? { ...scoop, count: newCount } : scoop,
      ),
    );
  };

  const changeToppingsHandler = (id: string) => {
    setToppings((prevToppings) =>
      prevToppings.map((topping) =>
        topping.id === id
          ? { ...topping, selected: !topping.selected }
          : topping,
      ),
    );
  };

  return {
    scoops,
    toppings,
    selectedScoops,
    selectedToppings,
    totalScoops,
    totalToppings,
    resetOrder,
    changeScoopsHandler,
    changeToppingsHandler,
  };
};

export default useOrderData;

export interface UseOrderDataReturnType {
  scoops: Scoop[];
  toppings: Topping[];
  selectedScoops: Scoop[];
  selectedToppings: Topping[];
  totalScoops: number;
  totalToppings: number;
  resetOrder: () => void;
  changeScoopsHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  changeToppingsHandler: (id: string) => void;
}
