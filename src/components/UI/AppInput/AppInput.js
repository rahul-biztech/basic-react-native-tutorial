import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const appInput = (props) => (
    <TextInput
        {...props}
        style={[styles.container, props.style]}
        underlineColorAndroid='transparent'
    />
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        margin: 8,
    }
});

export default appInput;

