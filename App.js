import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import List from './screens/List';

const App = () => {

  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'darkcyan',
          headerStyle: {
            borderBottomWidth: 1,
            backgroundColor: 'lightyellow'
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'blue'
          }
        }}
      >
        <Stack.Screen
        name="Login"
        component={Login}
         />
        <Stack.Screen
        name="Home"
        component={Home} 
        />
        <Stack.Screen
        name="List"
        component={List} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;