import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MultimediaScreen from './screens/MultimediaScreen';

import HomeScreen from './screens/HomeScreen';
import ListadoScreen from './screens/ListadoScreen';

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
        {/** HOME */}
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'ENDERS Basket'}}/>

        {/**LISTADO */}
        <Stack.Screen name="Listado" component={ListadoScreen} options={{ title: 'ENDERS Basket' }} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
  <Stack.Screen 
  name="Multimedia" 
  component={MultimediaScreen} 
  options={{ title: 'Multimedia' }} 
/>
}