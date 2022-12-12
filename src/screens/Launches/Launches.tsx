import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';

// Launches specific imports
import type { Launches } from '../../types/type.launches';

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
      {launches && launches.map((launches: Launches, idx: number) => {
        console.log(idx);
        console.log(launches);
        return (
          <View key={idx}>
            <Text style={styles.launchItemText}>{launches.flight_number}</Text>
            <Text style={styles.launchItemText}>{launches.mission_name}</Text>
            <Text style={styles.launchItemText}>{launches.launch_date_unix}</Text>
            <Text style={styles.launchItemText}>{launches.rocket.rocket_name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  launchesScreen: {
    padding: 10,
    backgroundColor: "white",
  },
  launchItemText: {
    color: "black",
  }
});

export default LaunchesScreen;
