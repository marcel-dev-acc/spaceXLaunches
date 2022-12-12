// Package imports
import React from 'react';
import { SafeAreaView } from 'react-native';

// App specific imports
import LaunchesScreen from './src/Screens/Launches/Launches';


/**
 * App container
 * 
 * Includes screen, theme and context definitions at this level.
 */
const App = () => {
  return (
    <SafeAreaView>
      <LaunchesScreen />
    </SafeAreaView>
  );
};

export default App;
