import 'react-native';
import React from 'react';
import { SortButton } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('render sort button', () => {
  const setSortDirectionAsc = (sortDirectionAsc: boolean) => {};
  const sortLaunchesAsc = () => {};
  const sortLaunchesDsc = () => {};
  const tree: any = renderer.create(<SortButton
    sortDirectionAsc={true}
    setSortDirectionAsc={setSortDirectionAsc}
    sortLaunchesAsc={sortLaunchesAsc}
    sortLaunchesDsc={sortLaunchesDsc}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
