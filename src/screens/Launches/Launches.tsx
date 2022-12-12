import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text } from 'react-native';
import FilterButton from '../../Components/FilterButton/FilterButton';

// Launches specific imports
import LaunchItem from '../../Components/LaunchItem/LaunchItem';
import SortButton from '../../Components/SortButton/SortButton';

// TDD payload
import payload from './payload-example';


/**
 * Launches Screen
 *
 * Includes filter by year, sort, reload data and launch list (past, present and future).
 */
const LaunchesScreen = () => {
  const handleFetchLaunches = async () => {
    // Sort the list here
    setLaunches(payload);
  };

  const [launches, setLaunches] = useState([]);
  const [sortDirectionAsc, setSortDirectionAsc] = useState(true);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    if (launches.length === 0) handleFetchLaunches();
  }, [launches]);

  const launchItem = ({ item }: any) => (
      <LaunchItem launch={item} />
  );

  return (
    <View style={styles.launchesScreen}>
      <View style={styles.listActionsContainer}>
        <SortButton
          sortDirectionAsc={sortDirectionAsc}
          setSortDirectionAsc={setSortDirectionAsc}
        />
        <FilterButton />
      </View>
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
  listActionsContainer: {
    flexDirection: "row-reverse",
  },
});

export default LaunchesScreen;
