// Package imports
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';

// App specific imports
import {HomeScreen, LaunchesScreen} from './src/screens';
import launchStore from './src/state/store';


/**
 * App container
 * 
 * Includes screen, theme and context definitions at this level.
 */
const App = () => {

  const [ready, setReady] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <ReduxProvider store={launchStore}>
        <PaperProvider>
          {!ready && (<HomeScreen setReady={setReady} />)}
          {ready && (<LaunchesScreen />)}
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
