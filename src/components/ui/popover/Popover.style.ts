import { css } from '@emotion/react';

export const container = css`
  position: relative;
  display: inline-block;
`;

export const stylesBySize = {
  small: css`
    font-size: 12px;
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 12px;
  `,
  medium: css`
    font-size: 16px;
    padding: 6px 12px;
    margin-left: 12px;
    border-radius: 16px;
  `,
  large: css`
    font-size: 24px;
    padding: 10px 20px;
    margin-left: 18px;
    border-radius: 24px;
  `,
};

export const tooltip = (
  size: 'small' | 'medium' | 'large',
  background: string,
  color: string,
) => css`
  position: absolute;
  top: 0;
  left: 100%;
  white-space: nowrap;
  background: ${background};
  color: ${color};
  ${stylesBySize[size]}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
