import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
      {
        id: 'vanilla-scoop',
        title: 'Vanilla',
        thumbnail:
          'https://i.pinimg.com/564x/c0/f5/01/c0f50137ed7af889c556fa34ff43305d.jpg',
        count: 0,
      },
      {
        id: 'pistachio',
        title: 'Pistachio',
        thumbnail:
          'https://i.pinimg.com/564x/d5/e8/86/d5e88675467ce72cd9cff53a1fc03cbc.jpg',
        count: 0,
      },
    ]);
  }),
  http.get('http://localhost:3030/toppings', () => {
    return HttpResponse.json([
      {
        id: 'marshmallows',
        title: 'Marshmallows',
        thumbnail:
          'https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/delish-ice-cream-toppings1.jpg?crop=1xw:0.9991735537190083xh;center,top&resize=980:*',
        selected: false,
      },
      {
        id: 'jam',
        title: 'Jam',
        thumbnail:
          'https://hips.hearstapps.com/del.h-cdn.co/assets/15/29/delish-ice-cream-toppings24.jpg?crop=1xw:0.9991735537190083xh;center,top&resize=980:*',
        selected: false,
      },
    ]);
  }),
];
