import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Rockets from '../routes/Rockets';
import rockets from '../redux/rockets/rocketSlice';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      rockets,
    },
  });

  return store;
};
export default createTestStore;

describe('Snapshot components test', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
  });

  test('Rockets component test', () => {
    expect(component).toMatchSnapshot();
  });
});
