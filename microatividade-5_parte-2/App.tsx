import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

 

const styles = StyleSheet.create({

  container: {

    paddingTop: 50,

  },

  stretch: {

    width: 100,

    height: 200,

    resizeMode: 'stretch',

  },

});

 

const DisplayAnImageWithStyle = () => {

  return (

    <View style={styles.container}>

      <Image

        style={styles.stretch}

        source={require('./assets/logo2.jpg')}

      />

    </View>

  );

};

export default DisplayAnImageWithStyle;