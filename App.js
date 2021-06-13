import 'react-native-gesture-handler';
import React from 'react';
import SignInScreen from './app/src/views/screens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './app/src/views/screens/SignUpScreen';
import SplashScreen from './app/src/views/screens/SplashScreen';
import TodoList from './app/src/views/screens/Todo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Todo" component={TodoList} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
