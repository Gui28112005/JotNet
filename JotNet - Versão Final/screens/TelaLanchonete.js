import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BlocoDeNotas() {
  const [notas, setNotas] = useState([]);
  const [novaNota, setNovaNota] = useState('');

  useEffect(() => {
    carregarNotas();
  }, []);

  const carregarNotas = async () => {
    try {
      const notasArmazenadas = await AsyncStorage.getItem('@notas_bloco_de_notas');
      if (notasArmazenadas !== null) {
        setNotas(JSON.parse(notasArmazenadas));
      }
    } catch (error) {
      console.error('Erro ao carregar notas:', error);
    }
  };

  const salvarNotas = async (notas) => {
    try {
      await AsyncStorage.setItem('@notas_bloco_de_notas', JSON.stringify(notas));
    } catch (error) {
      console.error('Erro ao salvar Lanchonete:', error);
    }
  };

  const adicionarNota = () => {
    if (novaNota.trim() !== '') {
      const novaNotaObj = { id: Date.now(), texto: novaNota };
      const novasNotas = [...notas, novaNotaObj];
      setNotas(novasNotas.map((nota, index) => ({ ...nota, numero: index + 1 })));
      salvarNotas(novasNotas.map((nota, index) => ({ ...nota, numero: index + 1 })));
      setNovaNota('');
    }
  };

  const editarNota = (id, novoTexto) => {
    const notasAtualizadas = notas.map(nota => {
      if (nota.id === id) {
        return { ...nota, texto: novoTexto };
      }
      return nota;
    });
    setNotas(notasAtualizadas);
    salvarNotas(notasAtualizadas);
  };

  const removerNota = (id) => {
    const novasNotas = notas.filter(nota => nota.id !== id);
    setNotas(novasNotas.map((nota, index) => ({ ...nota, numero: index + 1 })));
    salvarNotas(novasNotas.map((nota, index) => ({ ...nota, numero: index + 1 })));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TextInput
        style={styles.itemTexto}
        value={item.texto}
        onChangeText={novoTexto => editarNota(item.id, novoTexto)}
        multiline
      />
      <TouchableOpacity onPress={() => removerNota(item.id)} style={styles.botaoRemover}>
        <Text style={styles.botaoRemoverTexto}>Remover Lanchonete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient colors={['#78ad89', 'black']} style={styles.container}>
      <StatusBar backgroundColor="#83bf70" barStyle="light-content" />
      <Text style={styles.titulo}>Lanchonete</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua melhor Lanchonte..."
        value={novaNota}
        onChangeText={text => setNovaNota(text)}
      />
      <TouchableOpacity onPress={adicionarNota} style={styles.botao}>
        <Text style={styles.botaoTexto}>Adicionar Lanchonete</Text>
      </TouchableOpacity>
      <FlatList
        data={notas}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.listaNotas}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#83bf70',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listaNotas: {
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
  itemTexto: {
    fontSize: 18,
    flex: 1,
  },
  botaoRemover: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
  },
  botaoRemoverTexto: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
