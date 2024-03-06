/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

function Title1({ children }: Props) {
  return (
    <p
      css={css`
        font-size: 32px;
        font-weight: 500;
        margin: 0 0 4px;
      `}
    >
      {children}
    </p>
  );
}

export default Title1;
