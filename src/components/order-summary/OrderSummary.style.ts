import { css } from '@emotion/react';

export const center = css`
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container = css`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  background: #f8f8f8;
`;

export const title = css`
  text-align: center;
`;

export const actions = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  border-top: 2px dashed lightgray;
`;
