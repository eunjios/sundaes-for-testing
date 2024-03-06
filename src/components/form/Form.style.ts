import { css } from '@emotion/react';

export const form = css`
  width: 678px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const total = css`
  text-align: right;
  padding: 40px 0;

  & strong {
    margin-left: 16px;
  }
`;

export const grandTotal = css`
  text-align: center;
  padding: 32px 16px 16px;
  border-top: 2px dashed lightgray;
`;

export const order = css`
  display: block;
  margin: 0 auto;
`;
