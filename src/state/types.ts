// Types specific to global state
import {Launch} from '../types/type.launches';

export type LaunchesState = Launch[];

export type AddLaunchAction = {
  type: string;
  launchData: Launch;
};

export type UpdateLaunchAction = {
  type: string;
  flightNumber: number;
  launchData: Launch;
};

export type RemoveLaunchAction = {
  type: string;
  flightNumber: number;
};

export type LaunchListAction =
  | AddLaunchAction
  | UpdateLaunchAction
  | RemoveLaunchAction;
