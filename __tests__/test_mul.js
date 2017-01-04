import App from '../index.ios.js';

test('Set 50000 And 10000 and *', () => {
  const solve = new App();
  expect(solve._solveExpression(50000,10000,'*')).toBe(500000000);
});

test('Set 40000 And 0 and *', () => {
  const solve = new App();
  expect(solve._solveExpression(40000,0,'*')).toBe(0);
});

test('Set 100 And -100 and *', () => {
  const solve = new App();
  expect(solve._solveExpression(100,-100,'*')).toBe(-10000);
});