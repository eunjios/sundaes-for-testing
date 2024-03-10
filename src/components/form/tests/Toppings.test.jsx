import React from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';
import Toppings from '../Toppings';

test('Initial topping conditions', async () => {
  render(
    <RecoilRoot>
      <React.Suspense>
        <Toppings />
      </React.Suspense>
    </RecoilRoot>,
  );

  // find topping images
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(2);

  const altText = toppingImages.map((image) => {
    const img = image;
    return img.alt;
  });
  expect(altText).toEqual(['Marshmallows topping', 'Jam topping']);
});
