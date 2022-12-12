import 'react-native';
import React from 'react';
import { timestampGetYear } from '../src/utils/date.util'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('get year from timestamp', () => {
  const timestamp: number = 1670854617;
  expect(timestampGetYear(timestamp)).toBe(2022);
});
