import React from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

interface IProps {
  backgroundColor?: ColorValue;
  isLoading: boolean;
  loadingMessage?: string;
}

const Loader: React.FC<IProps> = ({
  loadingMessage,
  isLoading = true,
  children,
}) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/loader.json')}
        autoPlay
        loop
        style={styles.lottieView}
      />
      {loadingMessage && (
        <Text style={styles.loadingMessage}>{loadingMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  lottieView: {
    width: 60,
    height: 60,
  },
  loadingMessage: {
    textAlign: 'center',
    marginTop: 8,
  },
});
export default Loader;
