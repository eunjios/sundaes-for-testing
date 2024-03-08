import { css } from '@emotion/react';

export const container = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const scoopItem = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const title = css`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 2px;
  width: 100%;

  & label {
    font-size: 16px;
    font-weight: 600;
  }

  & input {
    font-size: 14px;
    font-weight: 600;
    color: #666;
    width: 64px;
    text-align: center;
    border: none;
    outline: none;
  }
`;
