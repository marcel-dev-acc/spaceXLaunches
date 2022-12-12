import 'react-native';
import React from 'react';
import { FilterButton } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('render filter button', () => {
  const years: number[] = [
    2000,
    2001,
  ];
  const setFilterYear = (year: number): void => {};
  const filterLaunchesByYear = (year: number): void => {};
  const tree: any = renderer.create(<FilterButton
    years={years}
    setFilterYear={setFilterYear}
    filterLaunchesByYear={filterLaunchesByYear}
  />).toJSON();
  expect(tree).not.toBe(null);
  if (tree) expect(tree.children.length).not.toBe(0);
});
