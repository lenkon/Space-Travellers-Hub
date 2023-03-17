import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const MyProfile = () => (
  <div>
    <h1>MyProfile</h1>
  </div>
);

describe('Snapshot components test', () => {
  test('My Profile component test', () => {
    render(<MyProfile />);
    expect(screen.getByText('MyProfile')).toBeInTheDocument();
  });
});
