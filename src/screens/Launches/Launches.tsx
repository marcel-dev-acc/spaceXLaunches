import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList } from 'react-native';
import { Chip, Text } from 'react-native-paper';

// Launches specific imports
import {
  FilterButton,
  LaunchItem,
  SortButton,
  ReloadButton,
  Logo,
  Background,
  LoadingModal,
} from '../../components';
import { timestampGetYear } from '../../utils/date.util';
import { fetchLaunches } from '../../services/api.launches.service';
import launchStore from '../../state/store';
import { LAUNCHES_ACTION_TYPES } from '../../constants/state';
import type { AddLaunchAction, RemoveLaunchAction } from '../../state/types';
import type { Launch } from '../../types/type.launches';


/**
 * Launches Screen
 *
 * Includes filter by year, sort, reload data and launch list (past, present and future).
 */
const LaunchesScreen = () => {

  const handleFetchLaunches = async () => {
    setLoading(true);
    let launchDetails: Launch[] = await fetchLaunches();
    // Sort the list
    launchDetails.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
    // Define year filter list and store each item in global state
    let years: number[] = [];
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
      const year = timestampGetYear(launch.launch_date_unix); 
      if (years.indexOf(year) === -1) years.push(year);
    });
    setYears(years);
    // Set the launches internal state
    setLaunches(launchDetails);
    setLoading(false);
  };

  const sortLaunchesAsc = () => {
    let launchDetails: Launch[] = launches;
    launchDetails = launchDetails.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
    setLaunches(launchDetails);
  };

  const sortLaunchesDsc = () => {
    let launchDetails: Launch[] = launches;
    launchDetails = launchDetails.sort((a, b) => b.launch_date_unix - a.launch_date_unix);
    setLaunches(launchDetails);
  };

  const filterLaunchesByYear = (year: number) => {
    let launchDetails: Launch[] = launchStore.getState();
    launchDetails = launchDetails.filter((launch: Launch) => timestampGetYear(launch.launch_date_unix) === year);
    setLaunches(launchDetails);
  };

  const _launches: Launch[] = [];
  const [launches, setLaunches] = useState(_launches);
  const [sortDirectionAsc, setSortDirectionAsc] = useState(true);
  const [filterYear, setFilterYear] = useState(0);
  const _years: number[] = [];
  const [years, setYears] = useState(_years);  // Used for the filter by years
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (launches.length === 0) handleFetchLaunches();
  }, []);

  const launchItem = ({ item }: any) => (
      <LaunchItem launch={item} />
  );

  return (
    <View style={styles.launchesScreen}>
      <Background />
      <LoadingModal
        loading={loading}
        loadingText="Fetching launches"
      />
      <View style={styles.headerContainer}>
        <Logo />
        <ReloadButton
          handleFetchLaunches={handleFetchLaunches}
        />
      </View>
      <View style={styles.listActionsContainer}>
        <SortButton
          sortDirectionAsc={sortDirectionAsc}
          setSortDirectionAsc={setSortDirectionAsc}
          sortLaunchesAsc={sortLaunchesAsc}
          sortLaunchesDsc={sortLaunchesDsc}
        />
        <FilterButton
          years={years}
          setFilterYear={setFilterYear}
          filterLaunchesByYear={filterLaunchesByYear}
        />
      </View>
      {filterYear > 0 && (
        <View style={styles.yearChipContainer}>
          <Chip
            onClose={() => {
              setFilterYear(0);
              setLaunches(launchStore.getState());
            }}
            style={styles.yearChip}
            mode="outlined"
          >
            <Text
              variant='bodyLarge'
              style={styles.yearChipText}
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
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(61, 96, 170, 1)",
  },
  yearChipText: {
    color: "rgba(0, 0, 0, 1)",
  },
  headerContainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LaunchesScreen;
