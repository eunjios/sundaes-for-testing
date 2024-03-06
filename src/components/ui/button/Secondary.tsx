/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function SecondaryButton({ children, ...props }: Props) {
  return (
    <button
      css={css`
        font-size: 16px;
        background: transparent;
        color: #aaa;
        border: none;
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
