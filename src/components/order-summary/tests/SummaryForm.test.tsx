import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
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

  // checkbox initial condition
  const checkboxElement = screen.getByRole('checkbox', { name: /agree/i });
  expect(checkboxElement).not.toBeChecked();

  // button initial condition
  const buttonElement = screen.getByRole('button', { name: /order/i });
  expect(buttonElement).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', async () => {
  const user = userEvent.setup();

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

  // first click - button should be enabled
  await user.click(checkboxElement);
  expect(buttonElement).toBeEnabled();

  // second click - button should be disabled
  await user.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
});

test('popover responds to hover', async () => {
  const user = userEvent.setup();

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

  // popover starts out hidden
  const nullPopover = screen.queryByText(/cannot order/i);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const trigger = screen.getByText(/terms and conditions/i);
  await user.hover(trigger);
  const popover = screen.getByText(/cannot order/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(trigger);
  expect(popover).not.toBeInTheDocument();
});
