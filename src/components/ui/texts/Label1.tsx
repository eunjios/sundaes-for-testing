/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

function Label1({ children, ...props }: Props) {
  return (
    <label
      css={css`
        font-size: 16px;
        font-weight: 600;
      `}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label1;
