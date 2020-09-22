import React from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <InitialLaunchScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
