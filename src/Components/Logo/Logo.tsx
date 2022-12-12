import React from 'react';
import {StyleSheet, Image} from 'react-native';

/**
 * Logo
 *
 * Component to render company logo
 */
const Logo = () => {
  return (
    <Image
      accessibilityLabel="Space X logo"
      source={require('../../assets/img/spacex-logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

export default Logo;
