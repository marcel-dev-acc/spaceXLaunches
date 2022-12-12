// Package imports
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// App specific imports
import LaunchesScreen from './src/Screens/Launches/Launches';


/**
 * App container
 * 
 * Includes screen, theme and context definitions at this level.
 */
const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <LaunchesScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default App;
