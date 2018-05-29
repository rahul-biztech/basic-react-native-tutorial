import React, { Component } from 'react';
import { Modal, View, Button, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { DELETE_PLACE } from '../../store/actions/actionTypes';
import { deletePlace } from '../../store/actions';

class PlaceDetial extends Component {

    _placeDeleteHandler = () => {
        const key = this.props.selectedPlace.key;
        this.props.onDeletePlace(key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
                    <Text style={styles.placeName}> {this.props.selectedPlace.name} </Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this._placeDeleteHandler}>
                        <Icon name='md-trash' size={30} color={'red'} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 24
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    btnContainer: {
        alignItems: 'center'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetial);