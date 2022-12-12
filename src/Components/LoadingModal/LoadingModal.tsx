import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Portal, Modal} from 'react-native-paper';

type LoadingModalProps = {
  loading: boolean;
  loadingText: string;
  onDismiss?: () => void;
};

/**
 * Loading modal
 *
 * Used to inform the user that something is loading
 */
const LoadingModal = ({loading, loadingText, onDismiss}: LoadingModalProps) => {
  return (
    <Portal>
      <Modal
        visible={loading}
        onDismiss={onDismiss}
        style={styles.loadingModal}>
        <View style={styles.loadingContainer}>
          <Image
            accessibilityLabel="Loading image - rocket"
            source={require('../../assets/img/rocket-gif.gif')}
            style={styles.loadingImg}
            resizeMode="contain"
          />
          <Text variant="titleLarge" style={styles.loadingText}>
            {`${loadingText}...`}
          </Text>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  loadingModal: {
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  loadingContainer: {},
  loadingImg: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  loadingText: {
    alignSelf: 'center',
  },
});

export default LoadingModal;
