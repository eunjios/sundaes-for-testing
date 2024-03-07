import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('Checkbox enables button', () => {
  render(
    <SummaryForm
      moveToCompleted={() => {
        console.log('move to completed page');
      }}
      moveToInProgress={() => {
        console.log('move to in progress page');
      }}
    />,
  );

  // find the elements
  const checkboxElement = screen.getByRole('checkbox', { name: /agree/i });
  const buttonElement = screen.getByRole('button', { name: /order/i });

  // check initial conditions
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeDisabled();

  // when checkbox is checked, button should be enabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();

  // when checkbox is unchecked, button should be disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
});
