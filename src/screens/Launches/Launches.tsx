import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

// Launches specific imports
import LaunchItem from '../../Components/LaunchItem/LaunchItem';
import type { Launch } from '../../types/type.launches';

// TDD payload
import payload from './payload-example';


/**
 * Launches Screen
 *
 * Includes filter by year, sort, reload data and launch list (past, present and future).
 */
const LaunchesScreen = () => {
  const handleFetchLaunches = async () => {
    setLaunches(payload);
  };

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    if (launches.length === 0) handleFetchLaunches();
  }, [launches]);

  return (
    <View style={styles.launchesScreen}>
      <ScrollView style={styles.launchesList}>
        {
          launches && 
          launches.map(
            (launch: Launch, idx: number) => <LaunchItem key={idx} launch={launch} />
          )
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  launchesScreen: {
    padding: 10,
    backgroundColor: "white",
  },
  launchesList: {
  },
});

export default LaunchesScreen;
