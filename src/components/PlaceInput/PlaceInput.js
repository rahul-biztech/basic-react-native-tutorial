import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppInput from '../UI/AppInput/AppInput';

const placeInput = props => (
    <AppInput
        placeholder='Enter your place name here'
        value={props.placeName}
        onChangeText={props.onTextChange} />
);

export default placeInput;