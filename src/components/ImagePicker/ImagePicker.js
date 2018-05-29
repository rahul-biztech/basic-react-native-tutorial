import React, { Component } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';

import imagePlaceHolder from '../../assets/place-1.jpg';

class ImagePicker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image style={styles.imageStyle} source={imagePlaceHolder} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title='Pick Image' onPress={() => { }} />
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
    imageStyle: {
        width: '100%',
        height: '100%',
    }
});

export default ImagePicker;