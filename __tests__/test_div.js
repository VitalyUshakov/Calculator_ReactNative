import solve from '../helpers/default.js';

test('Set 10000 And 50000 and +', () => {
  expect(solve._solveExpression(10000,50000,'+')).toBe(60000);
});

test('Set 10000 And -50000 and +', () => {
  expect(solve._solveExpression(10000,-50000,'+')).toBe(-40000);
});

test('Set 100 And -100 and +', () => {
  expect(solve._solveExpression(100,-100,'+')).toBe(0);
});