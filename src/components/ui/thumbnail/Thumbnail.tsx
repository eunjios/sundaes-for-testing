/** @jsxImportSource @emotion/react */

import { image, landscape, portrait, thumbnail } from './Thumbnail.style';

interface Props {
  src: string;
  size: string | number;
  borderRadius?: string;
  alt?: string;
  isPortrait?: boolean;
}

function Thumbnail({
  size,
  src,
  alt = '썸네일',
  borderRadius = '12px',
  isPortrait = true,
}: Props) {
  return (
    <div css={thumbnail} style={{ width: size, height: size, borderRadius }}>
      <img
        css={[image, isPortrait ? portrait : landscape]}
        src={src}
        alt={alt}
        width="100%"
      />
    </div>
  );
}

export default Thumbnail;
