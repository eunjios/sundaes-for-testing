/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function Text1({ children, ...props }: Props) {
  return (
    <p
      css={css`
        font-size: 28px;
        & strong {
          margin: 0 16px;
          border-bottom: 2px solid black;
        }
      `}
      {...props}
    >
      {children}
    </p>
  );
}

export default Text1;
