import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Saludo = ({ name, lastName }) => {
    return (
        <Text>Hola {name} {lastName}</Text>
    );
};

/* 
    Se pueden usar valores por defecto en las props de un componente de dos formas distintas:
    1. Usando parámetros por default... const Saludo = ({name = "Eduardo"}) => {} 
    2. Usando default props de Component... Component.defaultProps = {}
*/

// default props
Saludo.defaultProps = {
    name: "Eduardo"
};

/* Validaciones en los prop */
Saludo.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string
};

export default Saludo;