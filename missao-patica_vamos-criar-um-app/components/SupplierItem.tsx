import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SupplierItem = ({ supplier }) => {
  return (
    <View style={styles.item}>
      <Image
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.name}>{supplier.name}</Text>
        <Text style={styles.Text}>{supplier.address}</Text>
        <Text style={styles.Text}>{supplier.contact}</Text>
        <Text style={styles.Text}>{supplier.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 25,
    resizeMode: 'stretch',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  Text: {
    color: 'white',
  }
});

export default SupplierItem;
