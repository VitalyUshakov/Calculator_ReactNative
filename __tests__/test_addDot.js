import App from '../index.ios.js';

test('Set 20.02 ', () => {
  const solve = new App();
  expect(solve._addDot(20.02)).toBe('');
});

test('Set 20 ', () => {
  const solve = new App();
  solve.state.resultValue = 1
  expect(solve._addDot('20')).toBe('.');
});

test('Set . ', () => {
  const solve = new App();
  solve.state.resultValue = 0
  expect(solve._addDot('')).toBe('0.');
});