import solve from '../helpers/default.js';

test('Set 50000 And 10000 and -', () => {
  expect(solve._solveExpression(50000,10000,'-')).toBe(40000);
});

test('Set 40000 And 50000 and -', () => {
  expect(solve._solveExpression(40000,50000,'-')).toBe(-10000);
});

test('Set 100 And -100 and -', () => {
  expect(solve._solveExpression(100,-100,'-')).toBe(200);
});

test('Set 100 And 100 and -', () => {
  expect(solve._solveExpression(100,100,'-')).toBe(0);
});