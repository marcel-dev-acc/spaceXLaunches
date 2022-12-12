import React, {useState, useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';

// Home specific imports
import {Logo} from '../../components';
import launchStore from '../../state/store';
import {fetchLaunches} from '../../services/api.launches.service';
import type {Launch} from '../../types/type.launches';
import {LAUNCHES_ACTION_TYPES} from '../../constants/state';
import type {AddLaunchAction, RemoveLaunchAction} from '../../state/types';

type HomeScreenProps = {
  setReady: (ready: boolean) => void;
};

/**
 * Home / Welcome screen
 *
 * Used to buffer the data for the app,
 * can also hold the login / registration
 * functionality.
 */
const HomeScreen = ({setReady}: HomeScreenProps) => {
  const handleFetchLaunches = async () => {
    let launchDetails: Launch[] = await fetchLaunches();
    // Sort the list
    launchDetails.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
    launchDetails.forEach((launch: Launch) => {
      const dispatchRemoveLaunchObj: RemoveLaunchAction = {
        type: LAUNCHES_ACTION_TYPES.LAUNCH_REMOVED,
        flightNumber: launch.flight_number,
      };
      launchStore.dispatch(dispatchRemoveLaunchObj);
      const dispatchAddLaunchObj: AddLaunchAction = {
        type: LAUNCHES_ACTION_TYPES.LAUNCH_ADDED,
        launchData: launch,
      };
      launchStore.dispatch(dispatchAddLaunchObj);
    });
    setReady(true);
  };

  const [launches, setLaunches] = useState(launchStore.getState());

  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    if (launches.length === 0) handleFetchLaunches();
  }, []);

  return (
    <View
      style={[
        styles.homeContainer,
        {
          marginTop: windowHeight / 4,
        },
      ]}>
      <Logo />
      <ActivityIndicator
        animating={true}
        size="large"
        color="rgba(61, 96, 170, 1)"
        style={styles.homeLoader}
      />
      <Text variant="titleLarge" style={styles.homeText}>
        Getting ready for launch...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLoader: {
    marginTop: 20,
    marginBottom: 20,
  },
  homeText: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default HomeScreen;
