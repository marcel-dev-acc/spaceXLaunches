import 'react-native';
import React from 'react';
import { Background } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('render background', () => {
  const tree: any = renderer.create(<Background />).toJSON();
  expect(tree).not.toBe(null);
  if (tree) expect(tree.children.length).not.toBe(0);
});
