/** @jsxImportSource @emotion/react */

import { useRecoilState } from 'recoil';
import Thumbnail from '../ui/thumbnail/Thumbnail';
import Text from '../ui/text/Text';
import { scoopsAtom } from '../../recoil/atoms';
import { container, scoopItem, title } from './Scoops.style';

function Scoops() {
  const [scoops, setScoops] = useRecoilState(scoopsAtom);

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

  return (
    <div css={container}>
      {scoops.map((scoop) => (
        <div key={scoop.id} css={scoopItem}>
          <Thumbnail
            src={scoop.thumbnail}
            size={160}
            alt={`${scoop.title} scoop`}
          />
          <div css={title}>
            <Text theme="label1" htmlFor={scoop.id}>
              {scoop.title}
            </Text>
            <input
              type="number"
              id={scoop.id}
              min={0}
              value={scoop.count}
              onChange={(event) => changeScoopsHandler(scoop.id, event)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scoops;
