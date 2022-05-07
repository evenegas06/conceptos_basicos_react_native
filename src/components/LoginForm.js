import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

const LoginForm = () => {
    return (
        <View>
            <TextInput placeholder='Email' />
            <TextInput placeholder='Contraseña' />
            <Button title='Enviar' onPress={() => console.log("Enviado")} />
            <Text>LoginForm</Text>
        </View>
    );
};

export default LoginForm;