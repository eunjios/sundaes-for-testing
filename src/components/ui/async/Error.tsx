/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { MdOutlineErrorOutline } from 'react-icons/md';

interface Props {
  message?: string;
}

function Error({ message = 'something went wrong' }: Props) {
  return (
    <div
      css={css`
        height: 100%;
        padding: 160px 0;
      `}
    >
      <div
        css={css`
          width: fit-content;
          margin: 0 auto;
          padding: 16px 32px;
        `}
      >
        <p
          css={css`
            color: #e85454;
            margin: 0;
            text-align: center;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          `}
        >
          <MdOutlineErrorOutline size={32} />
          {message}
        </p>
      </div>
    </div>
  );
}

export default Error;
