// Package imports
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

// App specific imports
import { LaunchesScreen } from './src/screens';
import launchStore from './src/state/store';


/**
 * App container
 * 
 * Includes screen, theme and context definitions at this level.
 */
const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ReduxProvider store={launchStore}>
        <PaperProvider>
          <LaunchesScreen />
        </PaperProvider>
      </ReduxProvider>
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
