import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
    return (
        /* Las páginas de navegación siempre se cargan de arriba hacia abajo */
        /* Es posible utilizar la propiedad initialRouteName="Name" para definir la página que queremos mostrar en un principio */
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Settings' component={SettingScreen} />
        </Tab.Navigator>
    );
};

export default NavigationTab;