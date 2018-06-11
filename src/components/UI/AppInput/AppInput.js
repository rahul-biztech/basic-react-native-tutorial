import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const appInput = (props) => (
    <TextInput
        {...props}
        style={[
            styles.container,
            props.style,
            !props.isValid && props.isTouched ? styles.invalidInput : null
        ]}
        underlineColorAndroid='transparent'
        autoCapitalize="none"
        autoCorrect={false}
    />
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        margin: 8,
    },
    invalidInput: {
        backgroundColor: '#f9c0c0',
        borderColor: 'red'
    }
});

export default appInput;

