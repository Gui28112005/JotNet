import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaCentral() {
  const [lugares, setLugares] = useState([{ id: 1, gastos: '' }]);
  const [limiteGastos, setLimiteGastos] = useState('');
  const [saldoDisponivel, setSaldoDisponivel] = useState('');
  const [resultado, setResultado] = useState('');

  const adicionarLugar = () => {
    const novoId = lugares.length + 1;
    setLugares([...lugares, { id: novoId, gastos: '' }]);
  };

  const removerLugar = (id) => {
    const novosLugares = lugares.filter(lugar => lugar.id !== id);
    setLugares(novosLugares);
  };

  const handleChangeGastos = (id, value) => {
    const novosLugares = lugares.map(lugar => {
      if (lugar.id === id) {
        return { ...lugar, gastos: value };
      }
      return lugar;
    });
    setLugares(novosLugares);
  };

  const aumentarLimite = () => {
    const novoLimite = parseFloat(limiteGastos) + 100; // Aumento fixo de 100 como exemplo
    setLimiteGastos(novoLimite.toString());
  
    // Aumentar o saldo disponível em 100
    const novoSaldo = parseFloat(saldoDisponivel) + 100;
    setSaldoDisponivel(novoSaldo.toFixed(2));
  };
  
  const diminuirLimite = () => {
    const novoLimite = parseFloat(limiteGastos) - 100; // Decremento fixo de 100 como exemplo
    if (novoLimite >= 0) {
      setLimiteGastos(novoLimite.toString());
  
      // Reduzir o saldo disponível em 100, mas não abaixo de zero
      const novoSaldo = Math.max(parseFloat(saldoDisponivel) - 100, 0);
      setSaldoDisponivel(novoSaldo.toFixed(2));
    }
  };

  const calcularMaisEconomico = () => {
    const gastosTotais = lugares.reduce((total, lugar) => {
      const gastos = parseFloat(lugar.gastos);
      return total + (isNaN(gastos) ? 0 : gastos);
    }, 0);

    const limite = parseFloat(limiteGastos);

    if (!isNaN(gastosTotais) && !isNaN(limite)) {
      if (gastosTotais <= limite) {
        const saldo = limite - gastosTotais;
        setSaldoDisponivel(saldo.toFixed(2));
        const lugarMaisEconomico = lugares.reduce((maisEconomico, lugar) => {
          const gastos = parseFloat(lugar.gastos);
          if (isNaN(gastos)) return maisEconomico;
          if (maisEconomico === null || gastos < maisEconomico.gastos) {
            return { id: lugar.id, gastos };
          }
          return maisEconomico;
        }, null);

        if (lugarMaisEconomico) {
          setResultado(`O Lugar ${lugarMaisEconomico.id} é mais econômico dentro do limite estabelecido.`);
        } else {
          setResultado('Todos os lugares têm o mesmo custo dentro do limite estabelecido.');
        }
      } else {
        setResultado('Os gastos excedem o limite estabelecido. Por favor, ajuste os valores.');
      }
    } else {
      setResultado('Por favor, insira valores válidos para calcular.');
    }
  };

  return (
    <LinearGradient colors={['#78ad89', 'black']} style={styles.container}>
      <StatusBar backgroundColor="#83bf70" barStyle="light-content" />
      <Text style={styles.titulo}>Comparador de Gastos de Fim de Semana</Text>

      <ScrollView style={{ flex: 1, width: '100%' }}>
        {lugares.map(lugar => (
          <View key={lugar.id} style={styles.inputContainer}>
            <Text style={styles.label}>Gastos no Lugar {lugar.id}:</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe os gastos"
              keyboardType="numeric"
              value={lugar.gastos}
              onChangeText={text => handleChangeGastos(lugar.id, text)}
            />
            {lugares.length > 1 && (
              <TouchableOpacity onPress={() => removerLugar(lugar.id)} style={styles.botaoRemover}>
                <Text style={styles.botaoRemoverTexto}>Remover</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        <TouchableOpacity onPress={adicionarLugar} style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar Lugar</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Limite de Gastos:</Text>
          <View style={styles.limiteContainer}>
            <TouchableOpacity onPress={diminuirLimite} style={styles.botao}>
              <Text style={styles.botaoTexto}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={[styles.input, styles.inputLimite]}
              placeholder="Informe o limite de gastos"
              keyboardType="numeric"
              value={limiteGastos}
              onChangeText={text => setLimiteGastos(text)}
            />
            <TouchableOpacity onPress={aumentarLimite} style={styles.botao}>
              <Text style={styles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={calcularMaisEconomico} style={styles.botao}>
          <Text style={styles.botaoTexto}>Comparar</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{resultado}</Text>
        <Text style={styles.saldoDisponivel}>Saldo Disponível: R$ {saldoDisponivel}</Text>
      </ScrollView>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  limiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLimite: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#83bf70',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  botaoRemover: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  botaoRemoverTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  saldoDisponivel: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});
