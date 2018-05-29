import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const bgButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, { backgroundColor: props.color }]}>
            <Text style={{ color: props.textColor }}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        margin: 4,
        padding: 8,
        borderRadius: 4,
        borderColor: '#aaa',
        borderWidth: 1,
    }
});

export default bgButton;