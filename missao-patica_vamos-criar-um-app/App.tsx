import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';

const App = () => {
  const [suppliers, setSuppliers] = useState([]);

  const handleAddSupplier = (supplier) => {
    setSuppliers([...suppliers, supplier]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cadastro de Fornecedores</Text>
      <SupplierForm onAddSupplier={handleAddSupplier} />
      <SupplierList suppliers={suppliers} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#5C7373',
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
