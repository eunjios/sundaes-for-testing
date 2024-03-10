import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import OrderForm from '../Form';

const renderRecoilOrderForm = () =>
  render(
    <RecoilRoot>
      <React.Suspense>
        <OrderForm moveToReview={() => {}} />
      </React.Suspense>
    </RecoilRoot>,
  );

test('disables button when scoops not selected', async () => {
  renderRecoilOrderForm();
  const user = userEvent.setup();

  // initial condition - button should be disabled
  const button = await screen.findByRole('button', { name: 'Order' });
  expect(button).toBeDisabled();

  // add scoops - button should be enabled
  const vanillaTopping = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await user.clear(vanillaTopping);
  await user.type(vanillaTopping, '1');
  expect(button).toBeEnabled();
});

test('updates scoop subtotal when scoops change', async () => {
  renderRecoilOrderForm();
  const user = userEvent.setup();

  // make sure total starts out at $0.00
  const scoopsSubtotal = await screen.findByText('Scoops total', {
    exact: false,
  });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1, and check subtotal
  const vanillaOption = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await user.clear(vanillaOption); // clear input element
  await user.type(vanillaOption, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update pistachio scoops to 2 and check subtotal
  const pistachioOption = await screen.findByRole('spinbutton', {
    name: 'Pistachio',
  });
  await user.clear(pistachioOption);
  await user.type(pistachioOption, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('updates topping subtotal when toppings change', async () => {
  renderRecoilOrderForm();
  const user = userEvent.setup();

  // initial condition: 0.00
  const toppingsSubtotal = await screen.findByText('Toppings total', {
    exact: false,
  });
  expect(toppingsSubtotal).toHaveTextContent('0.00');

  const jamOption = await screen.findByRole('checkbox', {
    name: 'Jam',
  });
  const marshmallowsOption = await screen.findByRole('checkbox', {
    name: 'Marshmallows',
  });

  // add topping - 1.50
  await user.click(jamOption);
  expect(toppingsSubtotal).toHaveTextContent('1.50');

  // add topping - 1.50 + 1.50 = 3.00
  await user.click(marshmallowsOption);
  expect(toppingsSubtotal).toHaveTextContent('3.00');

  // remove toppings - 0.00
  await user.click(jamOption);
  await user.click(marshmallowsOption);
  expect(toppingsSubtotal).toHaveTextContent('0.00');
});

test('updates grand total', async () => {
  renderRecoilOrderForm();
  const user = userEvent.setup();

  // initial condition - 0.00
  const grandTotal = await screen.findByText('Grand Total', { exact: false });
  expect(grandTotal).toHaveTextContent('0.00');

  // one scoop and one topping - 2.00 + 1.50 = 3.50
  const scoops = await screen.findAllByRole('spinbutton');
  const toppings = await screen.findAllByRole('checkbox');
  scoops.forEach((scoop) => user.clear(scoop));
  await user.type(scoops[0], '1');
  await user.click(toppings[0]);
  expect(grandTotal).toHaveTextContent('3.50');
});
