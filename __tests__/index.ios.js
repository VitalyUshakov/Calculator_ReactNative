import 'react-native';
import React from 'react';
import App from '../index.ios.js';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});


test('Set 1 And 2 and +', () => {
  const solve = new App();
  expect(solve._solveExpression(2,3,'+')).toBe(5);
});


