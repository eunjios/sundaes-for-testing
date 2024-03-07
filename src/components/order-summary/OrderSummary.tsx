/** @jsxImportSource @emotion/react */

import Text from '../ui/text/Text';
import SummaryForm from './SummaryForm';
import { UseOrderDataReturnType } from '../../hooks';
import { center, container } from './OrderSummary.style';

interface Props extends UseOrderDataReturnType {
  moveToInProgress: () => void;
  moveToCompleted: () => void;
}

function OrderSummary({
  selectedScoops,
  selectedToppings,
  totalScoops,
  totalToppings,
  moveToInProgress,
  moveToCompleted,
}: Props) {
  return (
    <div css={center}>
      <div css={container}>
        <Text theme="title1">Order Summary</Text>
        <Text theme="text2">
          Scoops <strong>${totalScoops.toFixed(2)}</strong>
        </Text>
        <ul>
          {selectedScoops.map((scoop) => (
            <li key={scoop.id}>{`${scoop.count} ${scoop.title}`}</li>
          ))}
        </ul>
        <Text theme="text2">
          Toppings <strong>${totalToppings.toFixed(2)}</strong>
        </Text>
        <ul>
          {selectedToppings.map((topping) => (
            <li key={topping.id}>{topping.title}</li>
          ))}
        </ul>
        <Text theme="text1">
          Total <strong>${(totalScoops + totalToppings).toFixed(2)}</strong>
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
