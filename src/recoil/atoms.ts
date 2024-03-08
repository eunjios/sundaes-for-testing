import { atom } from 'recoil';
import { scoopsSelector, toppingsSelector } from './selectors';

export const scoopsAtom = atom({
  key: 'scoopsAtom',
  default: scoopsSelector,
});

export const toppingsAtom = atom({
  key: 'toppingsAtom',
  default: toppingsSelector,
});
