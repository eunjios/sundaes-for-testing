/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import Button from '../ui/button/Button';
import { actions, check } from './SummaryForm.style';
import Popover from '../ui/popover/Popover';

interface Props {
  moveToCompleted: () => void;
  moveToInProgress: () => void;
}

function SummaryForm({ moveToCompleted, moveToInProgress }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
  };

  return (
    <form css={actions}>
      <Popover text="as you know, you cannot order" hasIcon={true} css={check}>
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={changeHandler}
        />
        <label htmlFor="terms">I agree to terms and conditions</label>
      </Popover>
      <Button
        theme="primary"
        type="button"
        onClick={moveToCompleted}
        disabled={!isChecked}
      >
        Order
      </Button>
      <Button theme="secondary" type="button" onClick={moveToInProgress}>
        Back
      </Button>
    </form>
  );
}

export default SummaryForm;
