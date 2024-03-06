import { useState } from 'react';
import { OrederPhase } from '../types';

const useOrderPhase = () => {
  const [phase, setPhase] = useState<OrederPhase>('inProgress');

  const moveToInProgress = () => {
    setPhase('inProgress');
  };

  const moveToReview = () => {
    setPhase('review');
  };

  const moveToCompleted = () => {
    setPhase('completed');
  };

  return {
    phase,
    moveToInProgress,
    moveToReview,
    moveToCompleted,
  };
};

export default useOrderPhase;

export interface UseOrderPhaseReturnType {
  phase: OrederPhase;
  moveToInProgress: () => void;
  moveToReview: () => void;
  moveToCompleted: () => void;
}
