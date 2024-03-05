import { css } from '@emotion/react';

export const thumbnail = css`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  overflow: hidden;
`;

export const image = css`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const landscape = css`
  height: 100%;
  width: auto;
`;

export const portrait = css`
  width: 100%;
  height: auto;
`;
