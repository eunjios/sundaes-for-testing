/** @jsxImportSource @emotion/react */

import { useRecoilValue } from 'recoil';
import Text from '../ui/text/Text';
import SummaryForm from './SummaryForm';
import {
  selectedScoops,
  selectedToppings,
  totalAll,
  totalScoops,
  totalToppings,
} from '../../recoil/selectors';
import { center, container } from './OrderSummary.style';

interface Props {
  moveToInProgress: () => void;
  moveToCompleted: () => void;
}

function OrderSummary({ moveToInProgress, moveToCompleted }: Props) {
  const scoops = useRecoilValue(selectedScoops);
  const toppings = useRecoilValue(selectedToppings);
  const scoopsAmount = useRecoilValue(totalScoops);
  const toppingsAmount = useRecoilValue(totalToppings);
  const total = useRecoilValue(totalAll);

  return (
    <div css={center}>
      <div css={container}>
        <Text theme="title1">Order Summary</Text>
        <Text theme="text2">
          Scoops <strong>${scoopsAmount.toFixed(2)}</strong>
        </Text>
        <ul>
          {scoops.map((scoop) => (
            <li key={scoop.id}>{`${scoop.count} ${scoop.title}`}</li>
          ))}
        </ul>
        <Text theme="text2">
          Toppings <strong>${toppingsAmount.toFixed(2)}</strong>
        </Text>
        <ul>
          {toppings.map((topping) => (
            <li key={topping.id}>{topping.title}</li>
          ))}
        </ul>
        <Text theme="text1">
          Total <strong>${total.toFixed(2)}</strong>
        </Text>
        <SummaryForm
          moveToCompleted={moveToCompleted}
          moveToInProgress={moveToInProgress}
        />
      </div>
    </div>
  );
}

export default OrderSummary;
