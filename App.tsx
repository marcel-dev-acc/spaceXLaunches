// Package imports
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';

// App specific imports
import { LaunchesScreen } from './src/screens';


/**
 * App container
 * 
 * Includes screen, theme and context definitions at this level.
 */
const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Provider>
        <LaunchesScreen />
      </Provider>
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
