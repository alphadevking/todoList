import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './src/screens/Landing';
import TaskScreen from './src/screens/Task';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Task" component={TaskScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
