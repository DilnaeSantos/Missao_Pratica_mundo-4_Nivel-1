import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SupplierItem from './SupplierItem';

const SupplierList = ({ suppliers }) => {
  return (
    <FlatList
      data={suppliers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <SupplierItem supplier={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default SupplierList;
