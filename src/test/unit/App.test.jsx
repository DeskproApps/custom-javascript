import React from 'react';
import render from './render';
import App from '../../main/javascript/App';

test('successfully render the application in initial state', () => {
  const component = render(
    <App />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
