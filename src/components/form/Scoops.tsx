/** @jsxImportSource @emotion/react */

import Thumbnail from '../ui/thumbnail/Thumbnail';
import { container, title } from './Scoops.style';
import type { Scoop } from '../../types';
import Label1 from '../ui/texts/Label1';

interface Props {
  scoops: Scoop[];
  changeHandler: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
}

function Scoops({ scoops, changeHandler }: Props) {
  return (
    <div css={container}>
      {scoops.map((scoop) => (
        <div
          key={scoop.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Thumbnail src={scoop.thumbnail} size={160} />
          <div css={title}>
            <Label1 htmlFor={scoop.id}>{scoop.title}</Label1>
            <input
              type="number"
              id={scoop.id}
              min={0}
              value={scoop.count}
              onChange={(event) => changeHandler(scoop.id, event)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scoops;
