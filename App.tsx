import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import imagex from './assets/icons/eco-light.png';
import imagexoff from './assets/icons/eco-light-off.png';

const App = () => {
  const toggle = false;

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <Image
        style={toggle ? style.lightingOn : style.lightingOn}
        source={toggle ? imagex : imagexoff}
      />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
});
