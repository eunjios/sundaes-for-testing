import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Scoops from '../Scoops';

test('Initial scoops conditions', async () => {
  render(
    <RecoilRoot>
      <React.Suspense fallback={null}>
        <Scoops />
      </React.Suspense>
    </RecoilRoot>,
  );

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((image) => {
    const img = image;
    return img.alt;
  });
  expect(altText).toEqual(['Vanilla scoop', 'Pistachio scoop']);
});
