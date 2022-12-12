import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple, Text, IconButton, Menu } from 'react-native-paper';

type FilterButtonProps = {
  years: number[],
  setFilterYear: (year: number) => void,
};

/**
 * Sort button
 *
 * Used to define the sort direction for a list
 */
const FilterButton = ({ years, setFilterYear }: FilterButtonProps) => {

  const toggleYearMenu = () => setYearMenuVisible(!yearMenuVisible);

  const [yearMenuVisible, setYearMenuVisible] = useState(false);

  return (
    <Menu
      visible={yearMenuVisible}
      onDismiss={toggleYearMenu}
      anchor={
        <TouchableRipple
          onPress={() => toggleYearMenu()}
          rippleColor="rgba(0, 0, 0, .32)"
          style={styles.buttonPress}
        >
          <View style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              variant="bodyLarge"
            >
              Filter by Year
            </Text>
            <IconButton
              icon="menu-down"
              size={20}
              iconColor={"white"}
              style={styles.buttonIcon}
            />
          </View>
        </TouchableRipple>
      }
    >
      {years && years.map(
        (year: number, idx: number) => {
          return (
            <Menu.Item
              key={idx}
              onPress={() => {
                setFilterYear(year);
                toggleYearMenu();
              }}
              title={year}
            />
          );
        })
      }
    </Menu>
  );
};

const styles = StyleSheet.create({
  buttonPress: {
    backgroundColor: "rgb(61, 96, 170)",
    margin: 5,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
  },
  buttonIcon: {
    margin: 0,
  },
});

export default FilterButton;
