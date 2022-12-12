import {
  LaunchesState,
  LaunchListAction,
  AddLaunchAction,
  RemoveLaunchAction,
} from '../types';
import {LAUNCHES_ACTION_TYPES} from '../../constants/state';

export const initialState: LaunchesState = [];

const launchList = (
  state: LaunchesState = initialState,
  action: LaunchListAction,
) => {
  switch (action.type) {
    case LAUNCHES_ACTION_TYPES.LAUNCH_ADDED:
      const {launchData} = <AddLaunchAction>action;
      const {flight_number, mission_name, launch_date_unix, rocket} =
        launchData;
      return [
        ...state,
        {
          flight_number,
          mission_name,
          launch_date_unix,
          rocket,
        },
      ];
    case LAUNCHES_ACTION_TYPES.LAUNCH_REMOVED:
      const {flightNumber} = <RemoveLaunchAction>action;
      return state.filter(launch => launch.flight_number !== flightNumber);
    default:
      return state;
  }
};

export default launchList;
