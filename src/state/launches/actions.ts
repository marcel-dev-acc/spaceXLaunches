import type {Rocket} from '../../types/type.launches';
import {LAUNCHES_ACTION_TYPES} from '../../constants/state';
import type {AddLaunchAction, RemoveLaunchAction} from '../types';

export const addLaunch = (
  flight_number: number,
  mission_name: string,
  launch_date_unix: number,
  rocket: Rocket,
): AddLaunchAction => ({
  type: LAUNCHES_ACTION_TYPES.LAUNCH_ADDED,
  launchData: {
    flight_number,
    mission_name,
    launch_date_unix,
    rocket,
  },
});

export const removeLaunch = (flightNumber: number): RemoveLaunchAction => ({
  type: LAUNCHES_ACTION_TYPES.LAUNCH_REMOVED,
  flightNumber: flightNumber,
});
