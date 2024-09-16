import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  tinyLogo: {
    width: 60,
    height: 50,
    marginBottom: 20,
  },

  Logo: {
    width: 200,
    height: 90,
    marginBottom: 20,
  }

});
 

const DisplayAnImage = () => {

  return (

    <View style={styles.container}>

      <Image
        style={styles.Logo}
        source={require('./assets/logo2.jpg')}
      />

      <Image

        style={styles.tinyLogo}

        source={{

          uri: 'https://reactnative.dev/img/tiny_logo.png',

        }}

      />

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />

    </View>

  );

};

 

export default DisplayAnImage;