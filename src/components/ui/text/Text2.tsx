/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function Text2({ children, ...props }: Props) {
  return (
    <p
      css={css`
        font-size: 20px;
        & strong {
          margin: 0 16px;
        }
      `}
      {...props}
    >
      {children}
    </p>
  );
}

export default Text2;
