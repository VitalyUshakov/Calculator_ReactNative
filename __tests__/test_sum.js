import App from '../index.ios.js';

test('Set 10000 And 50000 and +', () => {
  const solve = new App();
  expect(solve._solveExpression(10000,50000,'+')).toBe(60000);
});

test('Set 10000 And -50000 and +', () => {
  const solve = new App();
  expect(solve._solveExpression(10000,-50000,'+')).toBe(-40000);
});

test('Set 100 And -100 and +', () => {
  const solve = new App();
  expect(solve._solveExpression(100,-100,'+')).toBe(0);
});