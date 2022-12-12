import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Image } from 'react-native';
import { Chip, Text } from 'react-native-paper';

// Launches specific imports
import { FilterButton, LaunchItem, SortButton, ReloadButton, Logo, Background } from '../../components';
import { timestampGetYear } from '../../utils/date.util';
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
    // Sort the list here
    
    // Define year filter list
    let years: number[] = [];
    payload.forEach((launch: Launch) => {
      const year = timestampGetYear(launch.launch_date_unix); 
      if (years.indexOf(year) === -1) years.push(year);
    });
    setYears(years);
    // Set the launches internal state
    setLaunches(payload);
  };

  const [launches, setLaunches] = useState([]);
  const [sortDirectionAsc, setSortDirectionAsc] = useState(true);
  const [filterYear, setFilterYear] = useState(0);
  const _years: number[] = [];
  const [years, setYears] = useState(_years);  // Used for the filter by years

  useEffect(() => {
    if (launches.length === 0) handleFetchLaunches();
  }, [launches]);

  const launchItem = ({ item }: any) => (
      <LaunchItem launch={item} />
  );

  return (
    <View style={styles.launchesScreen}>
      <Background />
      <View style={styles.headerContainer}>
        <Logo />
        <ReloadButton />
      </View>
      <View style={styles.listActionsContainer}>
        <SortButton
          sortDirectionAsc={sortDirectionAsc}
          setSortDirectionAsc={setSortDirectionAsc}
        />
        <FilterButton
          years={years}
          setFilterYear={setFilterYear}
        />
      </View>
      {filterYear > 0 && (
        <View style={styles.yearChipContainer}>
          <Chip
            onClose={() => setFilterYear(0)}
            style={styles.yearChip}
          >
            <Text
              variant='bodyLarge'
            >
              {filterYear}
            </Text>
          </Chip>
        </View>
      )}
      <FlatList
        data={launches}
        renderItem={launchItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  launchesScreen: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
  },
  listActionsContainer: {
    flexDirection: "row-reverse",
  },
  yearChipContainer: {
    margin: 5,
    flexDirection: "row-reverse",
  },
  yearChip: {
    width: 90,
  },
  headerContainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LaunchesScreen;
