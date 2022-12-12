import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableRipple, Text, IconButton} from 'react-native-paper';

type SortButtonProps = {
  sortDirectionAsc: boolean;
  setSortDirectionAsc: (sortDirectionAsc: boolean) => void;
  sortLaunchesAsc: () => void;
  sortLaunchesDsc: () => void;
};

/**
 * Sort button
 *
 * Used to define the sort direction for a list
 */
const SortButton = ({
  sortDirectionAsc,
  setSortDirectionAsc,
  sortLaunchesAsc,
  sortLaunchesDsc,
}: SortButtonProps) => {
  const sortText: string = sortDirectionAsc ? 'Ascending' : 'Descending';
  const sortArrow: string = sortDirectionAsc ? 'arrow-down' : 'arrow-up';
  const sortFunc = sortDirectionAsc ? sortLaunchesDsc : sortLaunchesAsc;

  const handlePress = (): void => {
    setSortDirectionAsc(!sortDirectionAsc);
    sortFunc();
  };

  return (
    <TouchableRipple
      onPress={handlePress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={styles.buttonPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} variant="bodyLarge">
          {`Sort ${sortText}`}
        </Text>
        <IconButton
          icon={sortArrow}
          size={20}
          iconColor={'white'}
          style={styles.buttonIcon}
        />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonPress: {
    backgroundColor: 'rgba(61, 96, 170, 1)',
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  buttonIcon: {
    margin: 0,
  },
});

export default SortButton;
