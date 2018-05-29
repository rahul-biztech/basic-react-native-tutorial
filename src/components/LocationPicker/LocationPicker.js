import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class LocationPicker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>Map</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title='Locate Me' onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 200,
    },
    buttonContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
});

export default LocationPicker;