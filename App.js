import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';

// eslint-disable-next-line no-unused-vars
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>Entry Point</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
