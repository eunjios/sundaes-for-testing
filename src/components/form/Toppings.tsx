/** @jsxImportSource @emotion/react */

import Thumbnail from '../ui/thumbnail/Thumbnail';
import { container, title } from './Toppings.style';
import type { Topping } from '../../types';
import Text from '../ui/text/Text';

interface Props {
  toppings: Topping[];
  changeHandler: (id: string) => void;
}

function Toppings({ toppings, changeHandler }: Props) {
  return (
    <div css={container}>
      {toppings.map((topping) => (
        <div key={topping.id}>
          <Thumbnail src={topping.thumbnail} size={160} />
          <div css={title}>
            <input
              type="checkbox"
              id={topping.id}
              checked={topping.selected}
              onChange={() => changeHandler(topping.id)}
            />
            <Text theme="label2" htmlFor={topping.id}>
              {topping.title}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toppings;
