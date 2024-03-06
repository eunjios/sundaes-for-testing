/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function PrimaryButton({ children, ...props }: Props) {
  return (
    <button
      css={css`
        min-width: 256px;
        height: 58px;
        font-size: 28px;
        padding: 8px 24px;
        background: black;
        color: white;
        border: 1px solid black;

        &:hover {
          background: #333;
          border: 1px solid #333;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
