/** @jsxImportSource @emotion/react */

import Text from '../ui/text/Text';
import Button from '../ui/button/Button';
import { container, layout } from './Completed.style';

interface Props {
  moveToInProgress: () => void;
  resetOrder: () => void;
}

const ORDER_NUMBER = 'A-7';

function Completed({ moveToInProgress, resetOrder }: Props) {
  const clickHandler = () => {
    resetOrder();
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
