import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Missions from '../routes/Missions';
import missionsReducer from '../redux/missions/missionSlice';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      missionsReducer,
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
        <Missions />
      </Provider>,
    ).toJSON();
  });

  test('Missions component test', () => {
    expect(component).toMatchSnapshot();
  });
});