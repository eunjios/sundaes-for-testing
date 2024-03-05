/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { initialScoops, initialToppings } from '../../data';
import Scoops from './Scoops';
import Toppings from './Toppings';
import { form, grandTotal, order, total } from './Form.style';
import Title1 from '../ui/texts/Title1';
import Text1 from '../ui/texts/Text1';
import Text2 from '../ui/texts/Text2';

function OrderForm() {
  const [scoops, setScoops] = useState(initialScoops);
  const [toppings, setToppings] = useState(initialToppings);

  const totalScoops =
    scoops.reduce((acc, cur) => {
      return acc + cur.count;
    }, 0) * 2;

  const totalToppings =
    toppings.reduce((acc, cur) => (cur.selected ? acc + 1 : acc), 0) * 1.5;

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

  return (
    <form css={form}>
      <Title1>Scoops</Title1>
      <p>$2.00 each</p>
      <Scoops scoops={scoops} changeHandler={changeScoopsHandler} />
      <Text2 css={total}>
        Scoops total<strong>${totalScoops.toFixed(2)}</strong>
      </Text2>
      <Title1>Toppings</Title1>
      <p>$1.50 each</p>
      <Toppings toppings={toppings} changeHandler={changeToppingsHandler} />
      <Text2 css={total}>
        Toppings total<strong>${totalToppings.toFixed(2)}</strong>
      </Text2>
      <Text1 css={grandTotal}>
        Grand Total <strong>${(totalScoops + totalToppings).toFixed(2)}</strong>
      </Text1>
      <button css={order}>Order</button>
    </form>
  );
}

export default OrderForm;
