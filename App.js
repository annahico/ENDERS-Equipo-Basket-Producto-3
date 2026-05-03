import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ListadoScreen from './screens/ListadoScreen';
import DetalleScreen from './screens/DetalleScreen';
import MultimediaScreen from './screens/MultimediaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Listado"
        screenOptions={({ navigation }) => ({
          title: 'ENDERS Basket',
          headerStyle: { backgroundColor: '#2B2D42' },
          headerTintColor: '#EDF2F4',
          headerTitleStyle: { fontWeight: '900' },
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={styles.botonInicio}
              onPress={() => navigation.navigate('Listado')}
            >
              <Text style={styles.textoBotonInicio}>Inicio</Text>
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="Listado" component={ListadoScreen} />
        <Stack.Screen name="Detalle" component={DetalleScreen} />
        <Stack.Screen name="Multimedia" component={MultimediaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  botonInicio: {
    marginRight: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    backgroundColor: '#D90429',
  },
  textoBotonInicio: {
    color: '#EDF2F4',
    fontWeight: '800',
  },
});
