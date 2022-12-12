import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';

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
    <Card style={styles.launchItem}>
      <Card.Content>
        <View style={styles.launchContent}>
          <View style={styles.launchNumberContainer}>
            <Text
              style={[styles.launchItemText, styles.launchNumber]}
              variant="titleLarge"
            >
              {`#${launch.flight_number}`}
            </Text>
            <Text
              style={[styles.launchItemText, styles.missionName]}
              variant="titleMedium"
            >
              {launch.mission_name}
            </Text>
          </View>
          <View style={styles.launchDateContainer}>
            <Text
              style={[styles.launchItemText, styles.launchDate]}
              variant="labelSmall"
            >
              {formatTimestamp(launch.launch_date_unix, "Do MMM YYYY")}
            </Text>
            <Text
              style={[styles.launchItemText, styles.rocketName]}
              variant="labelLarge"
            >
              {launch.rocket.rocket_name}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  launchItem: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 5,
    margin: 10,
  },
  launchContent: {
    flexDirection: "row",
  },
  launchNumberContainer: {
    flexDirection: "row",
    flex: 2,
  },
  launchNumber: {
    alignSelf: "center",
  },
  missionName: {
    marginLeft: 15,
    alignSelf: "center",
  },
  launchDateContainer: {
    flex: 1,
  },
  launchDate: {
    alignSelf: "flex-end",
  },
  rocketName: {
    marginTop: 5,
    alignSelf: "flex-end",
  },
  launchItemText: {
    color: "rgba(75, 75, 75, 1)",
  },
});

export default LaunchItem;
