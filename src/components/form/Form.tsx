/** @jsxImportSource @emotion/react */

import Scoops from './Scoops';
import Toppings from './Toppings';
import Text from '../ui/text/Text';
import { UseOrderDataReturnType } from '../../hooks';
import Button from '../ui/button/Button';
import { form, grandTotal, order, total } from './Form.style';

interface Props extends UseOrderDataReturnType {
  moveToReview: () => void;
}

function OrderForm({
  scoops,
  toppings,
  totalScoops,
  totalToppings,
  changeScoopsHandler,
  changeToppingsHandler,
  moveToReview,
}: Props) {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    moveToReview();
  };

  return (
    <form css={form} onSubmit={submitHandler}>
      <Text theme="title1">Scoops</Text>
      <p>$2.00 each</p>
      <Scoops scoops={scoops} changeHandler={changeScoopsHandler} />
      <Text theme="text2" css={total}>
        Scoops total<strong>${totalScoops.toFixed(2)}</strong>
      </Text>
      <Text theme="title1">Toppings</Text>
      <p>$1.50 each</p>
      <Toppings toppings={toppings} changeHandler={changeToppingsHandler} />
      <Text theme="text2" css={total}>
        Toppings total<strong>${totalToppings.toFixed(2)}</strong>
      </Text>
      <Text theme="text1" css={grandTotal}>
        Grand Total <strong>${(totalScoops + totalToppings).toFixed(2)}</strong>
      </Text>
      <Button theme="primary" css={order} disabled={totalScoops === 0}>
        Order
      </Button>
    </form>
  );
}

export default OrderForm;
