import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        /* Las páginas de navegación siempre se cargan de arriba hacia abajo */
        /* Es posible utilizar la propiedad initialRouteName="Name" para definir la página que queremos mostrar en un principio */
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Settings' component={SettingScreen} />
        </Stack.Navigator>
    );
};

export default NavigationStack;