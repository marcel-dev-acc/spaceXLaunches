import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple, Text, IconButton, Menu } from 'react-native-paper';

/**
 * Reload button
 *
 * Used to define the sort direction for a list
 */
const ReloadButton = () => {

  return (
    <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
        style={styles.buttonPress}
    >
        <View style={styles.buttonContainer}>
        <Text
            style={styles.buttonText}
            variant="bodyLarge"
        >
            Reload
        </Text>
        <IconButton
            icon="reload"
            size={20}
            iconColor={"white"}
            style={styles.buttonIcon}
        />
        </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonPress: {
    backgroundColor: "rgb(61, 96, 170)",
    margin: 5,
    marginRight: 0,
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

export default ReloadButton;
