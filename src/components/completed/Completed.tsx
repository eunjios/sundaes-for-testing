/** @jsxImportSource @emotion/react */

import { useSetRecoilState, useRecoilValue } from 'recoil';
import Text from '../ui/text/Text';
import Button from '../ui/button/Button';
import { scoopsAtom, toppingsAtom } from '../../recoil/atoms';
import { fetchedScoops, fetchedToppings } from '../../recoil/selectors';
import { container, layout } from './Completed.style';

interface Props {
  moveToInProgress: () => void;
}

const ORDER_NUMBER = 'A-7';

function Completed({ moveToInProgress }: Props) {
  const setScoops = useSetRecoilState(scoopsAtom);
  const setToppings = useSetRecoilState(toppingsAtom);
  const initialScoops = useRecoilValue(fetchedScoops);
  const initialToppings = useRecoilValue(fetchedToppings);

  const clickHandler = () => {
    setScoops(initialScoops);
    setToppings(initialToppings);
    moveToInProgress();
  };

  return (
    <div css={layout}>
      <div css={container}>
        <Text theme="title1">Thank you!</Text>
        <p>
          Your order number is <strong>{ORDER_NUMBER}</strong>
        </p>
      </div>
      <div>
        <Button theme="primary" onClick={clickHandler}>
          Create New Order
        </Button>
      </div>
    </div>
  );
}

export default Completed;
