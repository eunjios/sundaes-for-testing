import { css } from '@emotion/react';

export const actions = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 2px dashed lightgray;
`;

export const check = css`
  width: fit-content;
  display: flex;
  gap: 8px;

  & label,
  input {
    cursor: pointer;
  }
`;
