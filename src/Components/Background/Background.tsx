import React from 'react';
import {StyleSheet, View, Image, useWindowDimensions} from 'react-native';

/**
 * Background
 *
 * Component to render background image
 */
const Background = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.backgroundContainer}>
      <Image
        accessibilityLabel="Space X logo"
        source={require('../../assets/img/launch-home.png')}
        style={[
          styles.background,
          {
            width: windowWidth,
            height: windowHeight,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    zIndex: -10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  background: {},
});

export default Background;
