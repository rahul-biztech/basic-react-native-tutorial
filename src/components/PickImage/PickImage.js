import React, { Component } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {

    state = {
        pickedImage: null
    }

    onImagePickerListener = () => {
        ImagePicker.showImagePicker({}, (res) => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log(res.error);
            } else {
                this.setState({
                    pickedImage: { uri: res.uri }
                });
                this.props.onPickImage(this.state.pickedImage)
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image style={styles.imageStyle} source={this.state.pickedImage} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button title='Pick Image' onPress={this.onImagePickerListener} />
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

export default PickImage;