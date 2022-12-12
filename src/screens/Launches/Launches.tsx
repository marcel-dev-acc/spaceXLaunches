import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text } from 'react-native';

// Launches specific imports
import LaunchItem from '../../Components/LaunchItem/LaunchItem';

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

  const launchItem = ({ item }: any) => (
      <LaunchItem launch={item} />
  );

  return (
    <View style={styles.launchesScreen}>
      <FlatList
        data={launches}
        renderItem={launchItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  launchesScreen: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default LaunchesScreen;
