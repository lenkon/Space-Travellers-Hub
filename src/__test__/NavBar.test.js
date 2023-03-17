import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavbarSpace from '../components/NavBar';

it('NavBar component test', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarSpace />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
