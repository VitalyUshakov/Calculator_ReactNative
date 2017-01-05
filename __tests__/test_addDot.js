import solve from '../helpers/default.js';

test('Set 20.02 ', () => {
  expect(solve._addDot(20.02)).toBe('');
});

test('Set 20 ', () => {
  solve.state.resultValue = 1
  expect(solve._addDot('20')).toBe('.');
});

test('Set . ', () => {
  solve.state.resultValue = 0
  expect(solve._addDot('')).toBe('0.');
});