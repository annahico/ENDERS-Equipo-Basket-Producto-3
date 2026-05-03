import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ListadoScreen from './screens/ListadoScreen';
import DetalleScreen from './screens/DetalleScreen';
import MultimediaScreen from './screens/MultimediaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a2e' },
          headerTintColor: '#e94560',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ENDERS Basket' }} />
        <Stack.Screen name="Listado" component={ListadoScreen} options={{ title: 'Plantilla' }} />
        <Stack.Screen name="Detalle" component={DetalleScreen} options={{ title: 'Ficha jugador' }} />
        <Stack.Screen name="Multimedia" component={MultimediaScreen} options={{ title: 'Multimedia' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}