import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
    <Text style={styels.container}>{props.children}</Text>
);

const styels = StyleSheet.create({
    container: {
        color: 'black',
        backgroundColor: 'transparent'
    }
});

export default mainText;