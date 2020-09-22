import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
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
