import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App = () => (

  <ScrollView>
    <Text style={{fontSize: 65, marginTop: 15}}>Scroll me plz</Text>
    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 85}}>If you like</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 90}}>Scrolling down</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 75}}>What's the best</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 70}}>Framework around?</Text>

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Image source={logo} />

    <Text style={{fontSize: 60}}>React Native</Text>

  </ScrollView>

);

export default App;