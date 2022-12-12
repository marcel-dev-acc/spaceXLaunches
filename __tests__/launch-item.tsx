import 'react-native';
import React from 'react';
import { LaunchItem } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('render launch item', () => {
  const launch = {
    flight_number: 1,
    mission_name: "Some mission name",
    launch_date_unix: 1670854617,
    rocket: {
      rocket_id: "1",
      rocket_name: "Some rocket name",
    },
  };
  const tree: any = renderer.create(<LaunchItem
    launch={launch}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
