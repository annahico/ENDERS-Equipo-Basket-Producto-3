import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet, View, Platform } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ListadoScreen from './screens/ListadoScreen';
import DetalleScreen from './screens/DetalleScreen';
import MultimediaScreen from './screens/MultimediaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={[styles.appRoot, Platform.OS === 'web' && styles.webRoot]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            title: 'ENDERS Basket',
            headerStyle: { backgroundColor: '#2B2D42' },
            headerTintColor: '#EDF2F4',
            headerTitleStyle: { fontWeight: '900' },
            headerBackTitleVisible: false,
            headerRight: () => (
              <TouchableOpacity
                style={styles.botonInicio}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.textoBotonInicio}>Inicio</Text>
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Listado" component={ListadoScreen} />
          <Stack.Screen name="Detalle" component={DetalleScreen} />
          <Stack.Screen name="Multimedia" component={MultimediaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
  },
  webRoot: {
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
  },
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
