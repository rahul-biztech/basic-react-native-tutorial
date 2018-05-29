import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class PlaceInput extends Component {

    state = {
        placename: ''
    }

    _textChnageHandler = (value) => {
        this.setState({
            placename: value
        })
    }

    _addPlace = () => {
        const {placename} = this.state;
        if (placename.trim() === '') {
            return;
        }
        this.props.onPlaceAdded(this.state.placename);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder="Add awesome places..."
                    onChangeText={this._textChnageHandler}
                    value={this.state.placename} />

                <Button
                    style={styles.placeButton}
                    title='Add'
                    onPress={this._addPlace} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '75%'
    },
    placeButton: {
        width: '25%'
    }
})

export default PlaceInput;