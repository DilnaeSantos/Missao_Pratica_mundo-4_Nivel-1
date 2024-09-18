import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SupplierForm = ({ onAddSupplier }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    // Verificar se todos os campos estão preenchidos
    if (!name || !address || !contact || !category) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    // Se todos os campos estiverem preenchidos, limpar a mensagem de erro
    setErrorMessage('');

    // Criar um novo fornecedor e limpar os campos do formulário
    const newSupplier = { name, address, contact, category };
    onAddSupplier(newSupplier);
    setName('');
    setAddress('');
    setContact('');
    setCategory('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Fornecedor"
        value={name}
        onChangeText={setName}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={contact}
        onChangeText={setContact}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
        placeholderTextColor="white"
      />

      {/* Exibir mensagem de erro se houver campos vazios */}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Button title="Cadastrar Fornecedor" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  error: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: 240,
    fontSize: 15,
    color: 'red',
    marginBottom: 10,
  },
});

export default SupplierForm;
