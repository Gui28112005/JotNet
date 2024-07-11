import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TelaHoteis from './screens/TelaHoteis';
import TelaSaloes from './screens/TelaSaloes';
import TelaCinemas from './screens/TelaCinemas';
import TelaPontosTuristicos from './screens/TelaPontosTuristicos';
import TelaRestaurante from './screens/TelaRestaurante';
import TelaLanchonete from './screens/TelaLanchonete';
import TelaPizzaria from './screens/TelaPizzaria';
import TelaCentral from './screens/TelaCentral';
import TelaPolitica from './screens/TelaPolitica';
import TelaSobre from './screens/TelaSobre';
import TelaNotas from './screens/TelaNotas';
import TelaCompromissos from './screens/TelaCompromissos';

const Stack = createStackNavigator();

const { width: screenWidth } = Dimensions.get('window');

const images = [
  require('./assets/Carrosel1.png'),
  require('./assets/Carrosel2.png'),
  require('./assets/Carrosel3.png'),
];

function HomeScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0); // Estado para controlar o índice do carrossel

  useEffect(() => {
    // Iniciar carrossel automático
    const interval = setInterval(() => {
      // Avança para a próxima imagem
      const nextIndex = (carouselIndex + 1) % images.length;
      setCarouselIndex(nextIndex);
      scrollToIndex(nextIndex);
    }, 3000); // Intervalo de 3 segundos

    return () => clearInterval(interval); // Limpar intervalo ao desmontar componente
  }, [carouselIndex]);

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        animated: true,
        x: screenWidth * index,
        y: 0,
      });
    }
  };

  const renderCarousel = () => (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={20}
      contentContainerStyle={styles.carouselContainer}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.carouselItem}>
          <Image source={image} style={styles.carouselImage} />
        </View>
      ))}
    </Animated.ScrollView>
  );

  return (
    <LinearGradient colors={['#78ad89', 'black']} style={styles.container}>
      <StatusBar backgroundColor="#83bf70" barStyle="light-content" />

      {/* Barra fixa na parte superior */}
      <View style={styles.topBar}>
        <Text style={styles.topText}>JotNest 🗓️</Text>
        <TouchableOpacity
          style={styles.topBarButton}
          onPress={() => navigation.navigate('TelaCentral')}
        >
          <Text style={styles.topBarButtonText}>Central de Gastos</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Organize Suas Tarefas!</Text>

      <View style={styles.carouselWrapper}>
        {renderCarousel()}
      </View>

      <View>
        <Text style={styles.title2}>Anote um Novo Compromisso:</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.buttonsContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaHoteis')}
        >
          <Text style={styles.buttonText}>Hotéis🏨</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaSaloes')}
        >
          <Text style={styles.buttonText}>Lugares🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaCinemas')}
        >
          <Text style={styles.buttonText}>Cinemas📽️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaNotas')}
        >
          <Text style={styles.buttonText}>Notas🗒️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaCompromissos')}
        >
          <Text style={styles.buttonText}>Agenda📓</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaPontosTuristicos')}
        >
          <Text style={styles.buttonText}>Pontos Turísticos🏙️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaRestaurante')}
        >
          <Text style={styles.buttonText}>Restaurante🍲</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaLanchonete')}
        >
          <Text style={styles.buttonText}>Lanchonete🍔</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaPizzaria')}
        >
          <Text style={styles.buttonText}>Pizzaria🍕</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('TelaSobre')}
        >
          <Text style={styles.bottomBarButtonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('TelaPolitica')}
        >
          <Text style={styles.bottomBarButtonText}>Política de Privacidade</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="TelaHoteis"
          component={TelaHoteis}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaSaloes"
          component={TelaSaloes}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaCinemas"
          component={TelaCinemas}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaPontosTuristicos"
          component={TelaPontosTuristicos}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaRestaurante"
          component={TelaRestaurante}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaLanchonete"
          component={TelaLanchonete}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaPizzaria"
          component={TelaPizzaria}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaCentral"
          component={TelaCentral}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaPolitica"
          component={TelaPolitica}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaSobre"
          component={TelaSobre}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaNotas"
          component={TelaNotas}
          options={{ headerTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="TelaCompromissos"
          component={TelaCompromissos}
          options={{ headerTitle: 'Voltar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 65,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    elevation: 5,
    zIndex: 1,
  },
  topText: {
    color: 'green',
    fontSize: 27,
    fontWeight: 'bold',
  },
  topBarButton: {
    backgroundColor: '#78ad89',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  topBarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 90,
    textAlign: 'center',
  },
  title2: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 90,
    textAlign: 'justify',
  },
  carouselWrapper: {
    height: 250,
    marginTop: 20,
    alignItems: 'center',
    elevation: 18,
  },
  carouselContainer: {
    alignItems: 'center',
    elevation: 18,
  },
  carouselItem: {
    width: screenWidth - 40,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#78ad89',
    width: 125,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: -55,
    elevation: 14,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomBarButton: {
    backgroundColor: 'gray',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bottomBarButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
