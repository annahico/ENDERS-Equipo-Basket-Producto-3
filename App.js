import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListadoScreen from './screens/ListadoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#e94560',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="Listado" component={ListadoScreen} options={{ title: 'ENDERS Basket' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}