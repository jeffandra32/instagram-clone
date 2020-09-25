import React from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import InitialLaunchScreen from './src/screens/InitialLaunchScreen';
import FeedScreen from './src/screens/FeedScreen';
import SearchScreen from './src/screens/SearchScreen';
import GalleryScreen from './src/screens/GalleryScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <GalleryScreen />
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
