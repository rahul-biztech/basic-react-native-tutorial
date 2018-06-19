import React, { Component } from 'react';
import { Modal, View, Button, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions';

class PlaceDetial extends Component {

    constructor(props){
        super(props);
        console.log("Location: "+JSON.stringify(this.props.selectedPlace));
    }

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
                    <MapView
                        region={{
                            latitude: this.props.selectedPlace.location.latitude,
                            longitude: this.props.selectedPlace.location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        style={styles.mapContainer} />
                    <Text style={styles.placeName}> {this.props.selectedPlace.name} </Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this._placeDeleteHandler}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                            size={30}
                            color={'red'} />
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
    },
    mapContainer: {
        width: '100%',
        height: 200,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetial);