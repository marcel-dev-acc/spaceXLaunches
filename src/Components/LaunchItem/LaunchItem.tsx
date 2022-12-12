import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';

// Launches specific imports
import type { Launch } from '../../types/type.launches';
import { formatTimestamp } from '../../utils/date.util';

type LaunchItemProps = {
  launch: Launch,
};

/**
 * Launches Item
 *
 * Used to render an item for each launch
 */
const LaunchItem = ({ launch }: LaunchItemProps) => {

  return (
    <View style={[styles.launchItem, styles.launchItemShadow]}>
      <View style={styles.launchNumberContainer}>
        <Text style={[styles.launchItemText, styles.launchNumber]}>
          {`#${launch.flight_number}`}
        </Text>
        <Text style={[styles.launchItemText, styles.missionName]}>
          {launch.mission_name}
        </Text>
      </View>
      <View style={styles.launchDateContainer}>
        <Text style={[styles.launchItemText, styles.launchDate]}>
          {formatTimestamp(launch.launch_date_unix, "Do MMM YYYY")}
        </Text>
        <Text style={[styles.launchItemText, styles.rocketName]}>
          {launch.rocket.rocket_name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  launchItem: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
  },
  launchItemShadow: Platform.OS === 'ios' ? {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  } : {
    elevation: 10,
    shadowColor: 'black',
  },
  launchNumberContainer: {
    flexDirection: "row",
    flex: 2,
  },
  launchNumber: {
    fontSize: 25,
    alignSelf: "center",
  },
  missionName: {
    marginLeft: 15,
    fontSize: 20,
    alignSelf: "center",
  },
  launchDateContainer: {
    flex: 1,
  },
  launchDate: {
    fontSize: 10,
    alignSelf: "flex-end",
  },
  rocketName: {
    marginTop: 5,
    fontSize: 15,
    alignSelf: "flex-end",
  },
  launchItemText: {
    color: "rgb(75, 75, 75)",
  },
});

export default LaunchItem;
