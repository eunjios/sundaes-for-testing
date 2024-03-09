/** @jsxImportSource @emotion/react */

import { useRecoilState } from 'recoil';
import Thumbnail from '../ui/thumbnail/Thumbnail';
import Text from '../ui/text/Text';
import { toppingsAtom } from '../../recoil/atoms';
import { container, title } from './Toppings.style';

function Toppings() {
  const [toppings, setToppings] = useRecoilState(toppingsAtom);

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
    <div css={container}>
      {toppings.map((topping) => (
        <div key={topping.id}>
          <Thumbnail
            src={topping.thumbnail}
            size={160}
            alt={`${topping.title} topping`}
          />
          <div css={title}>
            <input
              type="checkbox"
              id={topping.id}
              checked={topping.selected}
              onChange={() => changeToppingsHandler(topping.id)}
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
