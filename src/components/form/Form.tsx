/** @jsxImportSource @emotion/react */

import { useRecoilValue } from 'recoil';
import Scoops from './Scoops';
import Toppings from './Toppings';
import Text from '../ui/text/Text';
import Button from '../ui/button/Button';
import { totalAll, totalScoops, totalToppings } from '../../recoil/selectors';
import { form, grandTotal, order, total } from './Form.style';

interface Props {
  moveToReview: () => void;
}

function OrderForm({ moveToReview }: Props) {
  const totalScoopsAmount = useRecoilValue(totalScoops);
  const totalToppingsAmount = useRecoilValue(totalToppings);
  const totalAllAmount = useRecoilValue(totalAll);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    moveToReview();
  };

  return (
    <form css={form} onSubmit={submitHandler}>
      <Text theme="title1">Scoops</Text>
      <p>$2.00 each</p>
      <Scoops />
      <Text theme="text2" css={total}>
        Scoops total<strong>${totalScoopsAmount.toFixed(2)}</strong>
      </Text>
      <Text theme="title1">Toppings</Text>
      <p>$1.50 each</p>
      <Toppings />
      <Text theme="text2" css={total}>
        Toppings total<strong>${totalToppingsAmount.toFixed(2)}</strong>
      </Text>
      <Text theme="text1" css={grandTotal}>
        Grand Total <strong>${totalAllAmount.toFixed(2)}</strong>
      </Text>
      <Button theme="primary" css={order} disabled={totalScoopsAmount === 0}>
        Order
      </Button>
    </form>
  );
}

export default OrderForm;
