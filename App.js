import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WinScreen from './screens/WinScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [points, setPoints] = useState(0); // This state will hold the points

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen, passing points and setPoints as props */}
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} points={points} setPoints={setPoints} />
          )}
        </Stack.Screen>
        {/* Win screen, passing points */}
        <Stack.Screen name="Win">
          {(props) => (
            <WinScreen {...props} points={points} setPoints={setPoints} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
