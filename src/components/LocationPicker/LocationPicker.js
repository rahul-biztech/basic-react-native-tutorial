import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

class LocationPicker extends Component {

    state = {
        focusedLoaction: {
            latitude: 23.0225,
            longitude: 72.5714,
            latitudeDelta: 0.0122,
            longitudeDelta:
                Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
        },
        locationChosen: true
    }

    onCurrentLocationClick = () => {
        
    }

    pickLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusedLoaction: {
                    ...prevState.focusedLoaction,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        });
        this.map.animateToRegion({
            ...this.state.focusedLoaction,
            latitude: coords.latitude,
            longitude: coords.longitude
        });

        this.props.onPickLocation({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    }

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            };
            this.pickLocationHandler(coordsEvent);
        }, err => {
            alert("Fetching the position failed, please pick one manually!");
        });
    }

    render() {

        let marker = null;
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLoaction} />
        }

        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLoaction}
                    region={this.state.focusedLoaction}
                    style={styles.mapContainer}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref} >
                    {marker}
                </MapView>

                <View style={styles.buttonContainer}>
                    <Button title='Locate Me' onPress={this.getLocationHandler} />
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
    mapContainer: {
        width: '100%',
        height: 250,
    },
    buttonContainer: {
        marginTop: 8,
        marginBottom: 16,
    },
});

export default LocationPicker;