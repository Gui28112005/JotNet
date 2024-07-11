import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaCompromissos() {
  const [compromissos, setCompromissos] = useState([]);
  const [novoCompromisso, setNovoCompromisso] = useState('');
  const [novaData, setNovaData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    carregarCompromissos();
  }, []);

  const carregarCompromissos = async () => {
    try {
      const compromissosArmazenados = await AsyncStorage.getItem('@compromissos');
      if (compromissosArmazenados !== null) {
        setCompromissos(JSON.parse(compromissosArmazenados));
      }
    } catch (error) {
      console.error('Erro ao carregar compromissos: ', error);
    }
  };

  const salvarCompromissos = async (novosCompromissos) => {
    try {
      await AsyncStorage.setItem('@compromissos', JSON.stringify(novosCompromissos));
    } catch (error) {
      console.error('Erro ao salvar compromissos: ', error);
    }
  };

  const adicionarCompromisso = () => {
    if (novoCompromisso.trim() !== '' && novaData.trim() !== '') {
      const novoCompromissoObj = { compromisso: novoCompromisso, data: novaData };
      let novosCompromissos;
      if (editIndex !== null) {
        novosCompromissos = [...compromissos];
        novosCompromissos[editIndex] = novoCompromissoObj;
      } else {
        novosCompromissos = [...compromissos, novoCompromissoObj];
      }
      setCompromissos(novosCompromissos);
      salvarCompromissos(novosCompromissos);
      setNovoCompromisso('');
      setNovaData('');
      setModalVisible(false);
      setEditIndex(null);
    }
  };

  const editarCompromisso = (index) => {
    setNovoCompromisso(compromissos[index].compromisso);
    setNovaData(compromissos[index].data);
    setEditIndex(index);
    setModalVisible(true);
  };

  const removerCompromisso = (index) => {
    const novosCompromissos = compromissos.filter((_, i) => i !== index);
    setCompromissos(novosCompromissos);
    salvarCompromissos(novosCompromissos);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => editarCompromisso(index)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.compromisso}</Text>
        <Text style={styles.itemText}>{item.data}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => removerCompromisso(index)}>
          <Text style={styles.removeButtonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#78ad89', 'black']} style={styles.container}>
      <StatusBar backgroundColor="#83bf70" barStyle="light-content" />
      <Text style={styles.title}>Agenda</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => { setModalVisible(true); setEditIndex(null); }}>
        <Text style={styles.addButtonText}>Novo Compromisso</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{editIndex !== null ? 'Editar Compromisso' : 'Novo Compromisso'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o compromisso"
            value={novoCompromisso}
            onChangeText={text => setNovoCompromisso(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a data nesse formato (dd/mm/aaaa)"
            value={novaData}
            onChangeText={text => setNovaData(text)}
          />
          <TouchableOpacity style={styles.saveButton} onPress={adicionarCompromisso}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => { setModalVisible(false); setEditIndex(null); }}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        style={styles.listaContainer}
        data={compromissos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#83bf70',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign:'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#83bf70',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listaContainer: {
    width: '100%',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
});
