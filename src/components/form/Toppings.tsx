/** @jsxImportSource @emotion/react */

import Thumbnail from '../ui/thumbnail/Thumbnail';
import { container, title } from './Toppings.style';
import type { Topping } from '../../types';
import Label2 from '../ui/texts/Label2';

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
            <Label2 htmlFor={topping.id}>{topping.title}</Label2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toppings;
