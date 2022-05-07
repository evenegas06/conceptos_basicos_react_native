import { View, Text, Button } from 'react-native';
import React from 'react';

const HomeScreen = (props) => {
    // Para ver las propiedades de las que disponemos
    console.log(props);
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings");
    };

    return (
        <View>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en HomeScreen</Text>
            <Button title='Ir a ajustes' onPress={goToSettings}/>
        </View>
    );
};

export default HomeScreen;