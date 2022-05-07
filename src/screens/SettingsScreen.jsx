import { View, Text, Button } from 'react-native';
import React from 'react';

const SettingsScreen = (props) => {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };

    return (
        <View>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            {/* Para que la función se ejecute solo cuando se da click sobre el boton
            es necesario utilizar un arrow function... de lo contrario se ejecuta solo cuando 
            el componente se monta  */}
            <Button title='Ir a Home' onPress={() => goToPage("Home")} />
        </View>
    );
};

export default SettingsScreen;