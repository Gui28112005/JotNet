import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaPizzaria() {
  const [pedidos, setPedidos] = useState([]);
  const [novoPedido, setNovoPedido] = useState('');

  useEffect(() => {
    carregarPedidos();
  }, []);

  const carregarPedidos = async () => {
    try {
      const pedidosArmazenados = await AsyncStorage.getItem('@pedidos_tela_pizzaria');
      if (pedidosArmazenados !== null) {
        setPedidos(JSON.parse(pedidosArmazenados));
      }
    } catch (error) {
      console.error('Erro ao carregar Pizzarias:', error);
    }
  };

  const editarPedido = (id, novoTexto) => {
    const pedidosAtualizados = pedidos.map(pedido => {
      if (pedido.id === id) {
        return { ...pedido, descricao: novoTexto };
      }
      return pedido;
    });
    setPedidos(pedidosAtualizados);
    salvarPedidos(pedidosAtualizados);
  };

  const salvarPedidos = async (pedidos) => {
    try {
      await AsyncStorage.setItem('@pedidos_tela_pizzaria', JSON.stringify(pedidos));
    } catch (error) {
      console.error('Erro ao salvar Pizzaria:', error);
    }
  };

  const adicionarPedido = () => {
    if (novoPedido.trim() !== '') {
      const novoPedidoObj = { id: Date.now(), descricao: novoPedido };
      const novosPedidos = [...pedidos, novoPedidoObj];
      setPedidos(novosPedidos);
      salvarPedidos(novosPedidos);
      setNovoPedido('');
    }
  };

  const removerPedido = (id) => {
    const novosPedidos = pedidos.filter(pedido => pedido.id !== id);
    setPedidos(novosPedidos);
    salvarPedidos(novosPedidos);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TextInput
        style={styles.itemTexto}
        value={item.descricao}
        onChangeText={novoTexto => editarPedido(item.id, novoTexto)}
        multiline
      />
      {item.imagem && (
        <View style={styles.imagemContainer}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <TextInput
            style={styles.imagemLegenda}
            placeholder="Legenda da Imagem"
            value={item.legenda}
            onChangeText={novaLegenda => editarPedido(item.id, novaLegenda)}
          />
        </View>
      )}
      <TouchableOpacity onPress={() => removerPedido(item.id)} style={styles.botaoRemover}>
        <Text style={styles.botaoRemoverTexto}>Remover Pizzaria</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient colors={['#78ad89', 'black']} style={styles.container}>
      <StatusBar backgroundColor="#83bf70" barStyle="light-content" />
      <Text style={styles.texto}>Pizzaria</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua melhor pizzaria..."
        value={novoPedido}
        onChangeText={text => setNovoPedido(text)}
      />
      <TouchableOpacity onPress={adicionarPedido} style={styles.botao}>
        <Text style={styles.botaoTexto}>Adicionar Pizzaria</Text>
      </TouchableOpacity>
      <FlatList
        data={pedidos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.listaPedidos}
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
  texto: {
    fontSize: 24,
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
  listaPedidos: {
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
  },
});
